/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indizes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
import { IProduct } from '../../models';
import { Types } from 'mongoose';
declare class ProductService {
    createProduct(product: IProduct): Promise<IProduct & import("mongoose").Document<any, any, any> & {
        _id: any;
    }>;
    updateProductById(_id: Types.ObjectId, updateObject: Partial<IProduct>): Promise<IProduct | null>;
    findProductById(productId: string): Promise<IProduct | null>;
}
export declare const productService: ProductService;
export {};
