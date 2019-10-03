import React from 'react';
import { Button, Icon } from 'antd';
import { withNamespaces } from '@client/i18n';

interface Props {
  before?: string;
  after?: string;
  getPrevPage: () => void;
  getNextPage: () => void;
  t: (key: string) => string;
}
const BasePagingButtons = React.memo<Props>((props: Props) => {
  return (
    <div className='pagination' style={{display: 'flex', justifyContent: 'flex-end'}}>
      {props.before && (
        <Button onClick={props.getPrevPage}><Icon type='left' /> {props.t(`common:prev`)}</Button>
      )}
      {props.after && (
        <Button onClick={props.getNextPage}>{props.t(`common:next`)} <Icon type='right' /></Button>
      )}
    </div>
  );
});

const PagingButtons = withNamespaces('common')(BasePagingButtons);

export {
  PagingButtons,
};
