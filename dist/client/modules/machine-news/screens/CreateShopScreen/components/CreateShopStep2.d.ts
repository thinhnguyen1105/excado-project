import './CreateShopStep2.less';
interface Props {
    currentStep: number;
    selectedPackage?: {
        label: string;
        value: number;
        price: number;
    };
    nextStep: () => void;
    backStep: () => void;
    selectPackageChange: (payload: {
        package: number;
    }) => void;
    t: (key: string) => string;
}
declare const CreateShopStep2: (props: Props) => JSX.Element;
export default CreateShopStep2;
