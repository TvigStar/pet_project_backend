import { IRequestExtended } from '../../models';
import { NextFunction, Response } from 'express';
// import { ErrorHandler } from '../../errors';
// import { ResponseStatusCodesEnum } from '../../constants';

// import {promisify} from 'util';
// import * as fs from 'fs';
// const mv = promisify(fs.rename);

export const checkFileMiddleware = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<any> => {
  // req.product.photos = [];

  try {

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    const sampleFile = req.files.file as any ;
    const uploadPath = process.cwd() + '/src/public/' + sampleFile.name;

    req.file = {sampleFile,uploadPath};

    next();
  } catch (error) {
    next(error);
  }
};
