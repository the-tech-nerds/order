import BaseEntity from 'src/utils/entities/base-entity';
import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity()
export class Inventory extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  product_variance_id: number;

  @Column()
  amount: number;
}
