import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
  Ctx,
  RmqContext,
} from '@nestjs/microservices';
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
  async getUpdatedInventoryInfo(
    @Payload() message: any,
    @Ctx() context: RmqContext,
  ) {
    const { data } = JSON.parse(message);
    const inventoryItems = JSON.parse(data);
    if (inventoryItems && inventoryItems.length > 0) {
      inventoryItems.map(async (item: any) => {
        const {
          product_variance_id: productVarianceId,
          stock_count: stockCount,
        } = item;
        const inventory = await this.inventoryRepository.findOne({
          where: {
            product_variance_id: Number(productVarianceId),
          },
        });
        if (!inventory) {
          await this.inventoryRepository.save({
            product_variance_id: Number(productVarianceId),
            amount: Number(stockCount),
          });
          console.log('created');
        } else {
          await this.inventoryRepository.update(inventory.id, {
            product_variance_id: Number(productVarianceId),
            amount: Number(stockCount),
          });
          console.log('updated');
        }
      });
    }
  }
}
