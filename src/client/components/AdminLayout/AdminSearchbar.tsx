import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import { withNamespaces } from '@client/i18n';

interface Props {
  placeholder: string;
  value?: string;
  hasCreate?: boolean;
  showSearch: boolean;
  handleSearchChange: (value: string) => void;
  handleSearch: (value: string) => void;
  onCreateClick?: () => void;
  t: (key: string) => string;
}
const AdminSearchbar = withNamespaces('common')((props: Props) => {
  const translate = props.t;
  return (
    <Row type='flex' style={{marginBottom: '24px'}} justify='space-between'>
      <Col xs={12} xl={8}>
        {props.showSearch && (
          <Input.Search
            enterButton={true}
            placeholder={props.placeholder}
            onChange={(e) => props.handleSearchChange(e.target.value)}
            onSearch={(value) => props.handleSearch(value)}
          />
        )}
      </Col>
      <Col xs={12} xl={16} style={{textAlign: 'right'}}>
        {props.hasCreate && (
          <Button type='primary' onClick={props.onCreateClick}>{translate('common:create')}</Button>
        )}
      </Col>
    </Row>
  );
});

export {
  AdminSearchbar,
};
