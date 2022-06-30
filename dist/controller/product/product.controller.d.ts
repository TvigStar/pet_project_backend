import { IRequestExtended } from '../../models';
import { NextFunction, Response } from 'express';
declare class ProductController {
    createProduct(req: IRequestExtended, res: Response, next: NextFunction): Promise<void>;
}
export declare const productController: ProductController;
export {};
