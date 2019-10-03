import './SearchBar.less';
interface Props {
    searchKeywords?: string;
    handleSearchChange: (payload: {
        keyword: string;
    }) => void;
    handleFiltersChange: (payload: {
        [key: string]: any;
    }) => void;
    t: (key: string) => string;
}
declare const SearchBar: (props: Props) => JSX.Element;
export default SearchBar;
