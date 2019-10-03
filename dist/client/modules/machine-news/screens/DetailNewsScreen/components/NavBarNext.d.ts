import './NavBarNext.less';
import { News } from '@client/services/service-proxies';
interface Props {
    newsTitle: string;
    starStatus: any;
    newsData: News;
    changeFollowItemStatus: (starStatus: string, id: string) => void;
}
declare const NavBarNext: (props: Props) => JSX.Element;
export default NavBarNext;
