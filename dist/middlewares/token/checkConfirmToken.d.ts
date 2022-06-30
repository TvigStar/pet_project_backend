import { NextFunction, Response } from 'express';
import { IRequestExtended } from '../../models';
export declare const checkConfirmTokenMiddleware: (req: IRequestExtended, res: Response, next: NextFunction) => Promise<void>;
