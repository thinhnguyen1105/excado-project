import * as React from 'react';
import { Row } from 'antd';
import './FollowedListTitle.less';
interface Props {
  t: (key: string) => string;
}
interface State { }

class FollowedListTitle extends React.PureComponent<Props, State> {
  render () {
    return (
      <Row className='followed-list-title'>
      <h3>{this.props.t('common:followed-news')}</h3>
      </Row>
    );
  }
}

export default FollowedListTitle;
