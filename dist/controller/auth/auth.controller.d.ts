import { IRequestExtended } from '../../models';
import { NextFunction, Request, Response } from 'express';
declare class AuthController {
    authUser(req: IRequestExtended, res: Response, next: NextFunction): Promise<void>;
    refreshToken(req: IRequestExtended, res: Response, next: NextFunction): Promise<void>;
    logoutUser(req: Request, res: Response, next: NextFunction): Promise<void>;
}
export declare const authController: AuthController;
export {};
