import React from 'react';
import { Icon } from 'antd';
import './CollapsedButton.less';

interface Props {
  menuCollapsed: boolean;
  toggle: () => void;
}
export const CollapsedButton = React.memo<Props>((props: Props) => {
  return (
    <span className='trigger' onClick={props.toggle}>
      <Icon type={props.menuCollapsed ? 'menu-unfold' : 'menu-fold'} />
    </span>
  );
});
