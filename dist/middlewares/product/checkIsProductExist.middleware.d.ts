import { IRequestExtended } from '../../models';
import { NextFunction, Response } from 'express';
export declare const isProductExistsMiddleware: (req: IRequestExtended, res: Response, next: NextFunction) => Promise<any>;
