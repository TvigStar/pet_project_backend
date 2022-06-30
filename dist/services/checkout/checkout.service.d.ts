import { ICart, ICheckout, IUser } from '../../models';
import { Types } from 'mongoose';
declare class CheckoutService {
    createCheckout(checkout: Partial<ICheckout>): Promise<ICheckout>;
    findUserProceedCheckout(userId: Types.ObjectId): Promise<ICheckout>;
    findCartByParams(user: IUser, cartId: ICart): Promise<ICart>;
}
export declare const checkoutService: CheckoutService;
export {};
