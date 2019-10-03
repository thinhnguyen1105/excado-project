import { CategoryRepository } from '@app/machine-news';
import mongoose from 'mongoose';
export declare const CategorySchema: mongoose.Schema;
export declare const CategoryModel: mongoose.Model<mongoose.Document, {}>;
export declare const categoryRepository: CategoryRepository;
