import React, { Fragment } from 'react';
import { Input } from 'antd';
import './SearchBar.less';
const Search = Input.Search;

interface Props {
  searchKeywords?: string;
  handleSearchChange: (payload: {keyword: string}) => void;
  handleFiltersChange: (payload: {[key: string]: any}) => void;
  t: (key: string) => string;
}
const SearchBar = React.memo<Props>((props: Props) => {
  return (
    <Fragment>
      <Search
        placeholder={props.t('common:shop-search-placeholder')}
        enterButton={props.t('common:shop-search-button')}
        className='store-search-bar'
        value={props.searchKeywords}
        onChange={(e) => props.handleSearchChange({keyword: e.target.value})}
        onSearch={() => props.handleFiltersChange({})}
      />
    </Fragment>
  );
});

export default SearchBar;
