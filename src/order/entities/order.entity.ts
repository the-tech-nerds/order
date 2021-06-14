import BaseEntity from 'src/utils/entities/base-entity';
import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';
import { ItemList } from '../itemList';

@Entity()
export class Order extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  user_id: number;

  @Column()
  status: number;

  @Column()
  total_price: number;

  @Column()
  total_discount: number;

  @Column()
  total_vat: number;

  @Column()
  payment_menthod: string;

  @Column()
  payment_status: string;

  @Column()
  items: ItemList[];
}
