import { Component } from 'react';
import './CreatePost.less';
import { Model, Brand, Category, Province, WeightRange, RentalPeriod } from '@client/services/service-proxies';
interface Props {
    isCreate: boolean;
    fileList: any[];
    imageUrls: {
        uid: string;
        url: string;
    }[];
    brand?: string;
    newsType?: string;
    categoryId?: string;
    model?: string;
    weight?: number;
    year?: number;
    location?: string;
    state?: string;
    serialNo?: string;
    usedHours?: number;
    priceType?: string;
    price?: number;
    title?: string;
    description?: string;
    selectedWeightRange?: number;
    selectedRentalPeriod?: number;
    models: Model[];
    brands: Brand[];
    categories: Category[];
    provinces: Province[];
    loading: boolean;
    weightRanges: WeightRange[];
    rentalPeriods: RentalPeriod[];
    submit: () => void;
    backStep: () => void;
    toStep: (step: number) => void;
    changeFileList: (payload: {
        fileList: any;
    }) => void;
    changeData: (payload: {
        [key: string]: any;
    }) => void;
    getBrands: (value: string) => void;
    getModels: (payload: {
        [key: string]: any;
    }) => void;
    addNewModel: (payload: Model) => void;
    t: (key: string) => string;
}
interface State {
    previewVisible: boolean;
    previewImage: string;
    isUploading: boolean;
    models: Model[];
    isLoading: boolean;
    createModel: boolean;
    uploadPercent: string;
}
declare class CreatePostStep5 extends Component<Props, State> {
    state: State;
    openCreateModel: () => void;
    closeCreateModel: () => void;
    handleCreateModel: (payload: {
        modelName: string;
    }) => Promise<void>;
    handleCancel: () => void;
    handlePreview: (file: any) => void;
    handleChange: (obj: any) => void;
    beforeUpload: (file: any) => boolean;
    uploadImage: (image: any) => Promise<void>;
    convertPriceToText: (value: number) => string;
    render(): JSX.Element;
}
export default CreatePostStep5;
