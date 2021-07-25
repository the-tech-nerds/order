import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderCreateRequest } from '../requets/orderCreateRequest';

@Injectable()
export class CreateOrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async create(
    userId: number,
    orderRequest: OrderCreateRequest,
  ): Promise<Order> {
    return this.orderRepository.save(orderRequest);
  }
}
