import BaseEntity from 'src/utils/entities/base-entity';
import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { DiscountItems } from '../DiscountItems';

@Entity({ name: 'discounts' })
export class Discount extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  discount_percentage: number;

  @Column({ nullable: true })
  discount_amount: number;

  @Column({ nullable: true })
  start_date: Date;

  @Column({ nullable: true })
  end_date: Date;

  @Column()
  uuid: string;

  @Column({ type: 'int', default: 1 })
  status: number;

  @Column({ type: 'int', default: 0 })
  is_assigned: number;

  @Column()
  items: DiscountItems[];
}
