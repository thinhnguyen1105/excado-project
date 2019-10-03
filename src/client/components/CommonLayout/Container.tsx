import * as React from 'react';
import './Container.less';
interface Props { }
interface State { }

class Container extends React.PureComponent<Props, State> {
  render () {
    return (
      <div className='container'>
      {this.props.children}
      </div>
    );
  }
}

export default Container;
