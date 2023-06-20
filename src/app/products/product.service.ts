import { Product } from './product.model'
import { CreateProductDto } from './product.dto'
import { faker } from '@faker-js/faker';

export const products: Product[] = [];

export const funAgregarProduct = (data : CreateProductDto): Product =>{
  const dataNew: Product = {
    ...data,
    id: faker.string.uuid(),
    register: faker.date.recent(),
    update: faker.date.recent(),
    category: {
      id: data.categoryId, //ojo aki va categoriID
      name: faker.commerce.department(),
      register: faker.date.recent(),
      update: faker.date.recent()
    },
  }
  products.push(dataNew);
  return dataNew;
};

export const funModificarProduct = (data: Product, id: string) =>{

};
