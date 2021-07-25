import { ItemList } from '../itemList';
import { Customer } from './orderCustomer';
import { OrderShipping } from './orderShipping';

export enum PaymentType {
  SSLCOMMERZ = 'sslcommerz',
  BKASH = 'bkash',
  CASH_ON_DELIVERY = '',
}

export interface OrderCreateRequest {
  customer: Customer;
  total_price: number;
  total_discount: number;
  total_vat: number;
  payment_method: PaymentType;
  shipping: OrderShipping;
  itemList: ItemList[];
}
