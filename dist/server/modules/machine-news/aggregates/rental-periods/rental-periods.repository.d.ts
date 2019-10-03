import mongoose from 'mongoose';
import { RentalPeriodRepository } from './interfaces/RentalPeriodRepository';
export declare const RentalPeriodSchema: mongoose.Schema;
export declare const RentalPeriodModel: mongoose.Model<mongoose.Document, {}>;
export declare const rentalPeriodRepository: RentalPeriodRepository;
