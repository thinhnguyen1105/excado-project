import mongoose from 'mongoose';
import { WeightRangeRepository } from './interfaces/WeightRangeRepository';
export declare const WeightRangeSchema: mongoose.Schema;
export declare const WeightRangeModel: mongoose.Model<mongoose.Document, {}>;
export declare const weightRangeRepository: WeightRangeRepository;
