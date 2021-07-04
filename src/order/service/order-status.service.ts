import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { LocalDateToUtc } from '../../utils/date-time-conversion/date-time-conversion';

@Injectable()
export class OrderStatusService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async execute(
    orderId: number,
    userId: number,
    status: number,
  ): Promise<Order | undefined | void> {
    await this.orderRepository.update(orderId, {
      status,
      updated_by: userId,
      updated_at: LocalDateToUtc(new Date()),
    });

    return this.orderRepository.findOne(orderId);
  }
}
