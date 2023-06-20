type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Product {
	id: number | string;
	title: string;
	price: number;
	stock: number;
	size?: Sizes;
}

const products: Product[] = [];
const data: Product = {
  id: '1',
  title: 'Camisa de verano',
  price: 99.90,
  stock: 100,
  size: 'XL'
};

const funAgregarProduct = (data : Product) =>{
  products.push(data);
};
funAgregarProduct(data);
console.log('products',products);
