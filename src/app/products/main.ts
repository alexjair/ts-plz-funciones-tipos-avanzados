import { funAgregarProduct } from './product.service'
import { Product } from './product.model'

const data: Product = {
  id: '1',
  title: 'Camisa de verano',
  price: 99.90,
  stock: 100,
  size: 'XL',
  register: new Date(),
  update: new Date(),
  category: {
    id: '1',
    name: 'games',
    register: new Date(),
    update: new Date()
  }
};

funAgregarProduct(data);
