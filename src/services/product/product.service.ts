import { IProduct } from '../../models';
import { ProductModel } from '../../database';
import {Types} from 'mongoose';

class ProductService {
  createProduct(product: IProduct){
    const productToSave = new ProductModel(product);

    return productToSave.save();

  }

  updateProductById(_id: Types.ObjectId, updateObject: Partial<IProduct>): Promise<IProduct | null> {
    return ProductModel.findOneAndUpdate({_id}, updateObject).exec();
  }

  findProductById(productId: string): Promise<IProduct | null> {
    return ProductModel.findById(productId).exec();
  }

  findAllProducts(product: IProduct){
    return ProductModel.find({});
  }

}

export const productService = new ProductService();
