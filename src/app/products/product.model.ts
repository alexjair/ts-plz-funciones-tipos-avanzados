import { Category } from '../categorias/category.model'
import { BaseAtribute } from '../base.model'

export type Sizes = 'S' | 'M' | 'L' | 'XL';
export interface Product extends BaseAtribute {
	title: string;
  image: string,
  description: string,
	price: number;
	stock: number;
	size?: Sizes;
  color: string;
  category: Category;
  isNew: boolean;
  tags: string[];
}
