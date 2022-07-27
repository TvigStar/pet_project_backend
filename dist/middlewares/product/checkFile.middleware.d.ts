import { IRequestExtended } from '../../models';
import { NextFunction, Response } from 'express';
export declare const checkFileMiddleware: (req: IRequestExtended, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
