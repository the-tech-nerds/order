import { OrderProduct } from './requets/orderProduct';
import { OrderOffer } from './requets/orderOffer';

export interface ItemList {
  product_variance: OrderProduct;
  offer: OrderOffer;
  sale_price?: number;
  quantity: number;
}
