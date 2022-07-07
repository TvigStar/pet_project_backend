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
import { ICart, IProduct } from '../../models';
import { Types } from 'mongoose';
declare class CartService {
    createCart(cart: Partial<ICart>): Promise<ICart>;
    addProductToCart(userCart: ICart, product: IProduct, productCount: number): Promise<ICart | null>;
    findUserProceedCart(userId: Types.ObjectId): Promise<ICart>;
    updateCart(_id: Types.ObjectId, cartToUpdate: ICart): Promise<ICart | null>;
    getCartsByParams(findObject: Partial<ICart>): Promise<ICart[]>;
    deleteCartById(_id: Types.ObjectId | string): import("mongoose").Query<ICart & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, ICart & import("mongoose").Document<any, any, any> & {
        _id: any;
    }, {}, import("../../database").CartType>;
}
export declare const cartService: CartService;
export {};
