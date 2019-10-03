import './BrandList.less';
import { FeatureBrand } from '@client/services/service-proxies';
interface Props {
    featureBrands: FeatureBrand[];
}
declare const BrandList: (props: Props) => JSX.Element;
export default BrandList;
