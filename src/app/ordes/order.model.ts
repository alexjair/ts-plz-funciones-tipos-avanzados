import { Product } from '../products/product.model'
import { User } from '../users/users.model'
import { BaseAtribute } from '../base.model'

export interface Order extends BaseAtribute {
  products: Product[];
  user: User;
}
