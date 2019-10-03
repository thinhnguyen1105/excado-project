import './BrandDetails.less';
import { Brand } from '../../../../../services/service-proxies';
interface Props {
    brands: Brand[];
    topBrands: Brand[];
    loading: boolean;
}
declare const BrandDetails: (props: Props) => JSX.Element;
export default BrandDetails;
