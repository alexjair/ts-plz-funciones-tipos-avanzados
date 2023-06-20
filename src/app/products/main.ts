import { funAgregarProduct, products } from './product.service'
import { Product } from './product.model'
import { CreateProductDto } from './product.dto'
//libreria - faker autogenerado
import { faker } from '@faker-js/faker';

let data: CreateProductDto;
for (let index = 0; index < 3; index++) {
  /*
  data = {
    id: faker.string.uuid(),
    title: faker.commerce.productName(),
    price: faker.number.float({min:10,max:100,precision:0.01}),
    stock: faker.number.int({min:10,max:100}),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement([['gato','loro'], ['mesa','silla'],['laptop','celular']]),
    register: faker.date.recent(),
    update: faker.date.recent(),
    category: {
      id: faker.string.uuid(),
      name: faker.commerce.department(),
      register: faker.date.recent(),
      update: faker.date.recent()
    },
  };
  */

  //Se aplico GTO
  data = {
    title: faker.commerce.productName(),
    price: faker.number.float({min:10,max:100,precision:0.01}),
    stock: faker.number.int({min:10,max:100}),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    image: faker.image.url(),
    description: faker.commerce.productDescription(),
    color: faker.color.human(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement([['gato','loro'], ['mesa','silla'],['laptop','celular']]),
    categoryId: faker.string.uuid(),
  };
  funAgregarProduct(data);
}
console.log(products);

