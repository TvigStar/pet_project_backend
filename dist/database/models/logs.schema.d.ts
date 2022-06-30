import { Document, Model, Schema } from 'mongoose';
import { ILogs } from '../../models';
export declare type LogType = ILogs & Document;
export declare const LogSchema: Schema;
export declare const LogModel: Model<LogType>;
