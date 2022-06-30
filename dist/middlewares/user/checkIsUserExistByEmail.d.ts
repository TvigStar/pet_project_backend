import { NextFunction, Response } from 'express';
import { IRequestExtended } from '../../models';
export declare const checkIsUserExistByEmailMiddleware: (req: IRequestExtended, res: Response, next: NextFunction) => Promise<void>;
