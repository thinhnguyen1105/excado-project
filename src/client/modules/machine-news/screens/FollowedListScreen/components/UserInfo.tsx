import * as React from 'react';
import { Row, Col } from 'antd';
import './UserInfo.less';
import { ProfileState } from '@client/store';
interface Props {
  profileState: ProfileState;
  t: (key: string) => string;
}
interface State { }

class UserInfo extends React.PureComponent<Props, State> {
  render() {
    return (
      <Row className='user-info'>
        <Col lg={4} md={4} sm={24} xs={24} className='user-avatar' style={{ textAlign: 'center' }}>
          <div className='image-dashboard'>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${this.props.profileState && this.props.profileState.authUser && this.props.profileState.authUser.avatarUrl
                ? this.props.profileState.authUser.avatarUrl : 'static/images/default-avatar.jpg'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
          </div>
        </Col>
        <Col lg={20} md={20} sm={24} xs={24} className='user-text'>
          <span>{this.props.profileState.authUser!.fullName}</span><br />
          <a href={`/nguoi-dung/${(this.props.profileState.authUser as any).id}`} title={this.props.profileState.authUser!.fullName}><span>{this.props.t('common:go-to-your-public-page')}</span></a>
        </Col>
      </Row>
    );
  }
}

export default UserInfo;
