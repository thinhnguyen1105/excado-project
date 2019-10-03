import * as React from 'react';
import { Row, Col } from 'antd';
import './UserInfo.less';
import { ProfileState } from '@client/store';
import { withNamespaces } from '@client/i18n';
import { User } from '@client/services/service-proxies';
interface Props {
  profileState: ProfileState;
  currentUserData: Partial<User>;
  t: (key: string) => string;
}
interface State { }

class UserInfo extends React.PureComponent<Props, State> {
  render() {
    const translate = this.props.t;
    return (
      <Row className='user-info'>
        <Col lg={4} md={4} sm={8} xs={8} className='user-avatar'>
          <div className='image-dashboard'>
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url(${this.props.currentUserData && this.props.currentUserData.avatarUrl ? this.props.currentUserData.avatarUrl : 'static/images/default-avatar.jpg'})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            />
          </div>
        </Col>
        <Col lg={20} md={20} sm={16} xs={16} className='user-text'>
          <span>{this.props.profileState.authUser && (this.props.profileState.authUser as any).fullName ? `${(this.props.profileState.authUser as any).fullName}` : ''}</span><br />
          <a href={`/nguoi-dung/${(this.props.profileState.authUser as any).id}`} title={this.props.profileState.authUser && (this.props.profileState.authUser as any).fullName ? `${(this.props.profileState.authUser as any).fullName}` : ''}>
            <span>{translate('dashboard:go-to-your-public-page')}</span></a>
        </Col>
      </Row>
    );
  }
}

export default withNamespaces('dashboard')(UserInfo);
