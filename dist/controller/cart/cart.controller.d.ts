import { NextFunction, Request, Response } from 'express';
import { IRequestExtended } from '../../models';
declare class CartController {
    addProductToCart(req: IRequestExtended, res: Response, next: NextFunction): Promise<void>;
    getUserCart(req: IRequestExtended, res: Response, next: NextFunction): Promise<void>;
    deleteCart(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const cartController: CartController;
export {};
