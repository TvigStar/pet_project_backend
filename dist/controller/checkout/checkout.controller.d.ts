import { NextFunction, Response } from 'express';
import { IRequestExtended } from '../../models';
declare class CheckoutController {
    addCartToCheckout(req: IRequestExtended, res: Response, next: NextFunction): Promise<void>;
}
export declare const checkoutController: CheckoutController;
export {};
