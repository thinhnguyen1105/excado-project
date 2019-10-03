import './BrandFollowLetter.less';
import { Brand } from '../../../../../services/service-proxies';
interface Props {
    arrayLetter: string[];
    listBrands: Brand[];
    loading: boolean;
}
declare const BrandFollowLetter: (props: Props) => JSX.Element;
export default BrandFollowLetter;
