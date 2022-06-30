import { Document, Model, Schema } from 'mongoose';
import { IAccessToken } from '../../models';
export declare type AccessTokenType = IAccessToken & Document;
export declare const AccessTokenSchema: Schema;
export declare const AccessTokenModel: Model<AccessTokenType>;
