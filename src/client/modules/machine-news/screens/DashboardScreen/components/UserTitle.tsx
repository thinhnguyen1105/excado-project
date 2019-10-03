import * as React from 'react';
import { Row } from 'antd';
import './UserTitle.less';

interface Props {
  title: string;
}
const UserTitle = React.memo<Props>((props: Props) => {
  return (
    <Row className='user-title'>
      <h3>{props.title}</h3>
    </Row>
  );
});

export default UserTitle;
