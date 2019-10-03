import * as React from 'react';
import { Row } from 'antd';
import './FollowsTitle.less';
interface Props {
  t: (key: string) => string;
}
interface State {}

class FollowsTitle extends React.PureComponent<Props, State> {
  render () {
    return (
      <Row className='follows-title'>
        <h3>{this.props.t('follows:follows-list')}</h3>
      </Row>
    );
  }
}

export default FollowsTitle;
