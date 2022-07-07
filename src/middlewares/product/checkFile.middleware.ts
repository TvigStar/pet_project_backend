import { IRequestExtended } from '../../models';
import { NextFunction, Response } from 'express';
// import { ErrorHandler } from '../../errors';
// import { ResponseStatusCodesEnum } from '../../constants';

export const checkFileMiddleware = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<any> => {
  req.product.photos = [];
  try {
    const files = Object.values(req.files);
    await console.log(await files);
    //
    //   for (let i=0; i> files.length; i++){
    //     const {mimentype,name} = files[i]
    //     //   if (mimetype === 'image/jpeg' || 'image/png' || 'image/webp'){
    //     //
    //     //   } else {
    //     //     return next ( new ErrorHandler(ResponseStatusCodesEnum.BAD_REQUEST, `file ${name} is not valid`));
    //     //   }
    //     //
    //     // }
    //   }
    //
    //   req.product.photos.push(files[i])≠

    next();
  } catch (err){
    next (err);
  }
};
