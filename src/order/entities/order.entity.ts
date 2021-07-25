import BaseEntity from 'src/utils/entities/base-entity';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { ItemList } from '../itemList';
import { Customer } from '../requets/orderCustomer';
import { PaymentType } from '../requets/orderCreateRequest';
import { OrderShipping } from '../requets/orderShipping';

export enum PaymentStatus {
  FAILED = 0,
  PAID = 1,
  INITIATED = 2,
}

export enum OrderStatus {
  FAILED = 0,
  COMPLETED = 1,
  INITIATED = 2,
  PENDING = 3,
  CANCELED = 4,
}

@Entity()
export class Order extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  customer: Customer;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.INITIATED,
  })
  status: OrderStatus;

  @Column()
  total_price: number;

  @Column()
  total_discount: number;

  @Column()
  total_vat: number;

  @Column()
  payment_method: PaymentType;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.INITIATED,
  })
  payment_status: PaymentStatus;

  @Column()
  shipping: OrderShipping;

  @Column()
  items: ItemList[];
}
