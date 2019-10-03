interface Props {
    before?: string;
    after?: string;
    getPrevPage: () => void;
    getNextPage: () => void;
}
declare const PagingButtons: (props: Props) => JSX.Element;
export { PagingButtons, };
