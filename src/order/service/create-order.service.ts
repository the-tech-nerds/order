import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';
import { OrderRequest } from '../requets/order.request';

@Injectable()
export class CreateOrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  async create(userId: number, orderRequest: OrderRequest): Promise<Order> {
    orderRequest.itemList.sale_price = 0;
    return this.orderRepository.save(orderRequest);
  }
}
