import '@client/components/MachineDetailBox/MachineDetailBox.less';
import './DetailsProduct.less';
import { News } from '@client/services/service-proxies';
import { ProfileState } from '@client/store';
interface Props {
    data: News[];
    profileState: ProfileState;
    changeFollowStatus: (starStatus: string, id: string) => void;
    t: (key: string) => string;
}
declare const DetailsProduct: (props: Props) => JSX.Element;
export default DetailsProduct;
