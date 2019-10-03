import { Component } from 'react';
import './CreatePost.less';
import { Category, Brand, Model } from '@client/services/service-proxies';
import { PriceRange } from '@client/store';
interface Props {
    loading: boolean;
    selectedWeightRange?: number;
    selectedRentalPeriod?: number;
    newsType?: string;
    weightRanges: PriceRange[];
    rentalPeriods: PriceRange[];
    models: Model[];
    brands: Brand[];
    categories: Category[];
    categoryId?: string;
    brand?: string;
    model?: string;
    weight?: number;
    year?: number;
    getBrands: (value: string) => void;
    getModels: (payload: {
        [key: string]: any;
    }) => void;
    changeData: (payload: {
        [key: string]: any;
    }) => void;
    addNewModel: (payload: Model) => void;
    nextStep: () => void;
    backStep: () => void;
    t: (key: string) => string;
}
interface State {
    isLoading: boolean;
    createModel: boolean;
}
declare class CreatePostStep2 extends Component<Props, State> {
    state: State;
    openCreateModel: () => void;
    closeCreateModel: () => void;
    handleCreateModel: (payload: {
        modelName: string;
    }) => Promise<void>;
    render(): JSX.Element;
}
export default CreatePostStep2;
