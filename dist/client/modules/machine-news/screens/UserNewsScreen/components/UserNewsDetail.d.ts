import './UserNewsDetail.less';
import { ProfileState } from '@client/store';
import { ElasticSearchItemResult } from '@client/services/service-proxies';
interface Props {
    hasNext: boolean;
    hasPrev: boolean;
    loading: boolean;
    data: ElasticSearchItemResult[];
    activeTab: string;
    profileState: ProfileState;
    getNextPage: () => void;
    getPrevPage: () => void;
    activeTabChange: (payload: {
        activeTab: string;
    }) => void;
    changeFollowStatus: (starStatus: string, id: string) => void;
    t: (key: string) => string;
}
declare const UserNewsDetail: (props: Props) => JSX.Element;
export default UserNewsDetail;
