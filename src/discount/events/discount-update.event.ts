/* eslint-disable @typescript-eslint/naming-convention */
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import DiscountUpdateService from '../services/inventory-update.service';

@Controller()
export default class DiscountUpdateEvent {
  constructor(private discountUpdateService: DiscountUpdateService) {}

  @MessagePattern('inventory_updated')
  async getUpdatedInventoryInfo(@Payload() message: any) {
    const { data } = JSON.parse(message);
    const discount = JSON.parse(data);

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
      items,
    } = discount;

    if (uuid) {
      await this.discountUpdateService.execute(uuid, {
        name,
        discount_percentage,
        discount_amount,
        start_date,
        end_date,
        status,
        is_assigned,
        created_at,
        created_by,
        items,
      });
    }
  }
}
