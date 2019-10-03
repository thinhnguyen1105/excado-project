import React from 'react';

export class Page extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
