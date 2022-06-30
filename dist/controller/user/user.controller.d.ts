import { NextFunction, Request, Response } from 'express';
import { IRequestExtended } from '../../models';
declare class UserController {
    createUser(req: Request, res: Response, next: NextFunction): Promise<void>;
    confirmUser(req: IRequestExtended, res: Response, next: NextFunction): Promise<void>;
    forgotPassword(req: IRequestExtended, res: Response, next: NextFunction): Promise<void>;
    setForgotPass(req: IRequestExtended, res: Response, next: NextFunction): Promise<void>;
}
export declare const userController: UserController;
export {};
