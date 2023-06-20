type Sizes = 'S' | 'M' | 'L' | 'XL';

interface Productv2 {
	id: number | string;
	title: string;
	price: number;
	stock: number;
	size?: Sizes;
}

const Productv2s: Productv2[] = [];
const data: Productv2 = {
  id: '1',
  title: 'Camisa de verano',
  price: 99.90,
  stock: 100,
  size: 'XL'
};

const funAgregarProductv2 = (data : Productv2) =>{
  Productv2s.push(data);
};
funAgregarProductv2(data);
console.log('Productv2s',Productv2s);
