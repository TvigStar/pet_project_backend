import { Document, Model, Schema } from 'mongoose';
import { IProduct } from '../../models';
export declare type ProductType = IProduct & Document;
export declare const ProductSchema: Schema;
export declare const ProductModel: Model<ProductType>;
