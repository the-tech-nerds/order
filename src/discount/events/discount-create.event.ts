/* eslint-disable @typescript-eslint/naming-convention */

import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import DiscountCreateService from '../services/discount-create.service';

@Controller()
export default class DiscountCreateEvent {
  constructor(private discountCreateService: DiscountCreateService) {}

  @MessagePattern('discount_created')
  async getUpdatedDiscountInfo(@Payload() message: any) {
    const { data } = JSON.parse(message);
    const discount = JSON.parse(data);

    console.log('discount data', discount);

    const {
      uuid,
      name,
      discount_percentage,
      discount_amount,
      start_date,
      end_date,
      status,
      is_assigned,
      created_at,
      created_by,
      discountItems,
    } = discount;

    console.log('discount items', discountItems);

    await this.discountCreateService.execute({
      uuid,
      name,
      discount_percentage,
      discount_amount,
      start_date,
      end_date,
      status,
      is_assigned,
      created_at,
      created_by,
      discountItems,
    });
  }
}
