import { NewsRepository } from '@app/machine-news';
import mongoose from 'mongoose';
interface INewsModel extends mongoose.Model<any> {
    synchronize(criteria?: any): any;
    search(query: any, options: any, callback: any): any;
    esSearch(query: any, options: any, callback: any): any;
    createMapping(options: any, callback?: any): any;
}
export declare const NewsModel: INewsModel;
export declare const newsRepository: NewsRepository;
export {};
