import { Product } from './product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'register' | 'update' | 'category'>{
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;
