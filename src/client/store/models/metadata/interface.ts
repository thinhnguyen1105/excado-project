import { Brand, Category, Model, Province, CommonKeyword, WeightRange } from '../../../services/service-proxies';

export interface PriceRange {
  min: number;
  max: number;
}

export interface SelectOption {
  value: string;
  label: string;
  imageUrl: string[];
}

export interface StorePackage {
  value: number;
  label: string;
  price: number;
}

export interface MetadataState {
  loaded: boolean;
  brands: Brand[];
  categories: Category[];
  models: Model[];
  provinces: Province[];
  weightRanges: WeightRange[];
  rentalPeriods: PriceRange[];
  state: SelectOption[];
  commonKeywords: CommonKeyword[];
}

export interface MetadataReducers {
  addNewModel: (payload: Model) => void;
}
