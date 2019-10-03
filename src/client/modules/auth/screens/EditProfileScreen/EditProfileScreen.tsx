import React from 'react';
import CommonLayout from '@client/layouts/Page/CommonLayout';
import { User, Province } from '@client/services/service-proxies';
import { ProfileState, ProfileReducers, ProfileEffects } from '@client/store';
import UserTitle from '@client/modules/machine-news/screens/DashboardScreen/components/UserTitle';
import { Row, Col, Card, Upload, Button, message } from 'antd';
import './EditProfileScreen.less';
import UserProfileForm from './components/UserProfileForm';
import { initializeFirebaseApp } from '@client/core';
import firebase from 'firebase';
import 'firebase/auth';
import { getServiceProxy } from '@client/services';
import { config } from '@client/config';
import { UploadFile } from 'antd/lib/upload/interface';
import { isMobile } from 'react-device-detect';
import { withNamespaces } from '@client/i18n';

interface Props {
  userProfile: Partial<User>;
  searchKeyword: string;
  profileState: ProfileState;
  profileReducers: ProfileReducers & ProfileEffects;
  provinces: Province[];
  t: (key: string) => string;
  updateFilters: (payload: { [key: string]: string | number }) => void;
}
interface State {
  loading: boolean;
  userProfile: Partial<User>;
  avatarImageList: {
    file: UploadFile;
    base64Url: string;
  }[];
  fullName?: string;
}

class EditProfileScreen extends React.PureComponent<Props, State> {
  state: State = {
    loading: false,
    userProfile: this.props.userProfile,
    avatarImageList: [],
  };

  editUserProfile = async (payload: any): Promise<boolean> => {
    this.setState({
      loading: true,
    });
    try {
      initializeFirebaseApp();
      const idToken = await firebase.auth().currentUser!.getIdToken();
      const serviceProxy = getServiceProxy(idToken);

      await serviceProxy.updateProfile(this.props.userProfile._id!, {
        operation: payload.newPassword ? 'changePassword' : payload.avatarUrl ? 'updateAvatar' : 'updateDetail',
        payload,
      });
      this.setState({
        loading: false,
        userProfile: {
          ...this.state.userProfile,
          ...payload,
        },
      });

      if (payload.familyName || payload.givenName) {
        this.props.profileReducers.updateProfileInfo({
          fullName: [payload.familyName, payload.givenName].join(' '),
        });
        this.setState({
          fullName: [payload.familyName, payload.givenName].join(' '),
        });
      }
      message.success(this.props.t('edit-profile:updateProfileSuccess'));
      return true;
    } catch (error) {
      message.error(error.message || JSON.parse(error.response).message);
      this.setState({
        loading: false,
      });
      return false;
    }
  }

  uploadAvatar = async (file: UploadFile) => {
    if (config.upload.allowImageExt.test(file.name)) {
      let avatarImageResult: any;
      const avatarImageFormData = new FormData();
      avatarImageFormData.append('avatarImage', file as any);

      avatarImageResult = await fetch(`${config.url.api}/upload-image/avatar-image`, {
        method: 'POST',
        body: avatarImageFormData,
      }).then((res) => res.json());

      await this.editUserProfile(avatarImageResult);
      this.setState({
        userProfile: {
          ...this.state.userProfile,
          ...avatarImageResult,
        },
      });
    } else {
      message.error(this.props.t(`edit-profile:allow-images`));
    }
  };

  avatarImageBeforeUpload = async (file: UploadFile) => {
    this.uploadAvatar(file);
    return false;
  }

  render() {
    const translate = this.props.t;
    return (
      <div className='edit-profile-screen'>
        <CommonLayout
          updateFilters={this.props.updateFilters}
          topBrands={[]}
          searchKeyword={this.props.searchKeyword}
          hasSideBar={false}
          hasMenuItems={false}
          profileState={this.props.profileState}
          profileReducers={this.props.profileReducers}
          fullName={this.state.fullName}
        >
          <UserTitle title={translate('edit-profile:profile-settings')} />
          <div className='edit-profile-container'>
            <Row type='flex' gutter={!isMobile ? 24 : 0}>
              <Col lg={8} md={8} sm={24} xs={24}>
                <Card
                  style={{
                    padding: '20px 20px 0px 20px',
                    margin: '0 auto',
                    maxWidth: '240px',
                  }}
                  cover={
                    <div className='circular--landscape'>
                      <div
                        style={{
                          width: '100%',
                          height: '100%',
                          backgroundImage: `url(${this.state.userProfile.avatarUrl ? this.state.userProfile.avatarUrl : '/static/images/default-avatar.jpg'})`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          backgroundSize: 'cover',
                        }}
                      />
                    </div>
                  }
                >
                  <Card.Meta
                    title={
                      <Upload beforeUpload={this.avatarImageBeforeUpload} showUploadList={false}>
                        <Button icon='upload'>{translate('edit-profile:uploadAvatar')}</Button>
                      </Upload>
                    }
                  />
                </Card>
              </Col>

              <Col lg={16} md={16} sm={24} xs={24}>
                <UserProfileForm
                  loading={this.state.loading}
                  userProfile={this.state.userProfile}
                  editUserProfile={this.editUserProfile}
                  provinces={this.props.provinces}
                  t={this.props.t}
                />
              </Col>
            </Row>
          </div>
        </CommonLayout>
      </div>
    );
  }
}

export default withNamespaces('edit-profile')(EditProfileScreen);
