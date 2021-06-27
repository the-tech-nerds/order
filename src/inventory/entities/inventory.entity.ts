import BaseEntity from 'src/utils/entities/base-entity';
import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

export enum InventoryStatusType {
  ACTIVE = 1,
  DRAFT = 0,
}

@Entity()
export class Inventory extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  product_variance_id: number;

  @Column()
  price: number;

  @Column({
    type: 'enum',
    enum: InventoryStatusType,
    default: InventoryStatusType.DRAFT,
  })
  status: InventoryStatusType;

  @Column()
  amount: number;

  @Column()
  uuid: string;
}
