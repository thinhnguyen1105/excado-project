import mongoose from 'mongoose';
import { UsersRepository } from './interfaces/UsersRepository';
export declare const UsersSchema: mongoose.Schema;
export declare const UsersModel: mongoose.Model<mongoose.Document, {}>;
export declare const userRepository: UsersRepository;
