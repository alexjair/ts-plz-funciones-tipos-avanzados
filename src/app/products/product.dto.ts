/*
Los tipos Omit y Pick en TypeScript son utility types que te permiten crear un nuevo tipo basado
en un tipo existente, pero omitiendo o seleccionando algunas de las propiedades del tipo original.
*/

import { Product } from './product.model';

export interface CreateProductDto extends Omit<Product, 'id' | 'register' | 'update' | 'category'>{
  categoryId: string;
}

type example = Pick<Product, 'color' | 'description'>;

/*
Los tipos Partial y Required en TypeScript son utility types que te permiten crear un nuevo
tipo basado en un tipo existente, pero haciendo que todas las propiedades de ese tipo sean
opcionales u obligatorias.
*/
//Volver los atricutos opcionales '?' del obj
//export interface UpdateProductDto extends Partial<Product>{
export interface UpdateProductDto extends Partial<CreateProductDto>{

};
