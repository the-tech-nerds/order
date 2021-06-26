import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from '../entities/inventory.entity';

@Controller()
export default class InventoryUpdateEvent {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
  ) {}

  @MessagePattern('inventory_updated')
  async getUpdatedInventoryInfo(@Payload() message: any) {
    const { data } = JSON.parse(message);
    const {
      product_variance_id: productVarianceId,
      stock_count: stockCount,
      uuid,
      status,
      price,
    } = JSON.parse(data);

    if (uuid) {
      const inventory = await this.inventoryRepository.findOne({
        where: {
          uuid,
        },
      });
      if (inventory) {
        await this.inventoryRepository.update(inventory.id, {
          product_variance_id: Number(productVarianceId),
          amount: Number(stockCount),
          status,
          price,
        });
      }
    }
  }
}
