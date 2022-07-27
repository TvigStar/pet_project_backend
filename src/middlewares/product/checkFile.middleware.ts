import { v1 as uuidv1 } from 'uuid';
import { IRequestExtended, IUser } from '../../models';
import { NextFunction, Response } from 'express';
import * as fs from 'fs-extra';
import * as path from 'path';

export const checkFileMiddleware = async (req: IRequestExtended, res: Response, next: NextFunction) => {
  const {_id} = req.user as IUser;
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
    const dir= `${_id}/photo`;
    const phDir = await fs.mkdir(path.resolve(process.cwd(), 'src', 'public', dir),
      {recursive: true});
    console.log(phDir);
    const sampleFile = req.files.file as any;
    const fileExtantion = sampleFile.name.split('.').pop();
    console.log(fileExtantion);
    const fileName = `${uuidv1}.${fileExtantion}`;
    console.log(fileName);
    const uploadPath = phDir + sampleFile;
    console.log(uploadPath);
    req.file = {sampleFile, uploadPath};

    next();
  } catch (error) {
    next(error);
  }
};
