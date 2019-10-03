import './ShopInfoDetails.less';
import { Shop, News } from '@client/services/service-proxies';
import { ProfileState } from '@client/store';
interface Props {
    newsData: News[];
    shopInfo: Shop;
    resultSearchNewestPost: any;
    starStatus: any;
    profileState: ProfileState;
    changeFollowStatus: (starStatus: string, id: string) => void;
    changeFollowItemStatus: (statStatus: string, id: string) => void;
    t: (key: string) => string;
}
declare const ShopInfoDetails: (props: Props) => JSX.Element;
export default ShopInfoDetails;
