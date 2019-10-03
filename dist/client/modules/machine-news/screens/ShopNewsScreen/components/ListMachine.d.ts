import './ListMachine.less';
import { News } from '@client/services/service-proxies';
import { ProfileState } from '@client/store';
interface Props {
    data: News[];
    hasNext: boolean;
    hasPrev: boolean;
    profileState: ProfileState;
    getNextPage: () => void;
    getPrevPage: () => void;
    changeFollowStatus: (starStatus: string, id: string) => void;
    t: (key: string) => string;
}
declare const ListMachine: (props: Props) => JSX.Element;
export default ListMachine;
