import { Brand, Category, Province } from '@app/machine-news';
export interface NewsStatisticsResult {
    daysOfWeek: {
        _id: number;
        totalNews: number;
    }[];
    hoursOfDay: {
        _id: number;
        totalNews: number;
    }[];
    brands: Brand[];
    categories: Category[];
    provinces: Province[];
}
