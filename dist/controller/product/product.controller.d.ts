import { IRequestExtended } from '../../models';
import { NextFunction, Request, Response } from 'express';
declare class ProductController {
    createProduct(req: IRequestExtended, res: Response, next: NextFunction): Promise<void>;
    getAllProduct(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const productController: ProductController;
export {};
