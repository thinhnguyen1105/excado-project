import { CommonKeyword } from '@client/services/service-proxies';
import './CommonKeywords.less';
interface Props {
    commonKeywords: CommonKeyword[];
    t: (key: string) => string;
}
declare const CommonKeywords: (props: Props) => JSX.Element;
export default CommonKeywords;
