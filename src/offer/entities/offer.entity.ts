import { Column, Entity, ObjectIdColumn } from 'typeorm';
import BaseEntity from '../../utils/entities/base-entity';

export enum OfferStatusType {
  ACTIVE = 1,
  INACTIVE = 2,
  DRAFT = 0,
}
@Entity({ name: 'offers' })
export class Offer extends BaseEntity {
  @ObjectIdColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  total_price: number;

  @Column()
  offer_detail: string;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column({
    type: 'enum',
    enum: OfferStatusType,
    default: OfferStatusType.DRAFT,
  })
  status: number;
}
