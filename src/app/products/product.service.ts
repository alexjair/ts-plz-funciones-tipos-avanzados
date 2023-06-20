
import { Product } from './product.model'

export const products: Product[] = [];

export const funAgregarProduct = (data : Product) =>{
  products.push(data);
};
