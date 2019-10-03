import * as React from 'react';

interface Props {}
interface State {}
const Fragment = React.Fragment;
class LeftSideBarWithoutMenu extends React.PureComponent<Props, State> {
  render() {
    return (
      <Fragment>
        <img src={`/static/images/sidebar-1.png`} width='100%' />
        <img src={`/static/images/sidebar-2.png`} width='100%' style={{ marginTop: '30px' }} />
      </Fragment>
    );
  }
}

export default LeftSideBarWithoutMenu;
