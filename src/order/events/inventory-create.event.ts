import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from '../entities/inventory.entity';

@Controller()
export default class InventoryCreateEvent {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
  ) {}

  @MessagePattern('inventory_created')
  async getUpdatedInventoryInfo(@Payload() message: any) {
    const { data } = JSON.parse(message);
    const inventoryItems = JSON.parse(data);
    console.log(inventoryItems);
    if (inventoryItems && inventoryItems.length > 0) {
      inventoryItems.map(async (item: any) => {
        const {
          product_variance_id: productVarianceId,
          stock_count: stockCount,
          uuid,
          status,
          price,
        } = item;

        await this.inventoryRepository.save({
          product_variance_id: Number(productVarianceId),
          amount: Number(stockCount),
          uuid,
          status,
          price,
        });
        // const inventory = await this.inventoryRepository.findOne({
        //   where: {
        //     uuid: Number(uuid),
        //   },
        // });
        // if (!inventory) {
        //   await this.inventoryRepository.save({
        //     product_variance_id: Number(productVarianceId),
        //     amount: Number(stockCount),
        //     uuid,
        //     status,
        //     price
        //   });
        // } else {
        //   await this.inventoryRepository.update(inventory.id, {
        //     product_variance_id: Number(productVarianceId),
        //     amount: Number(stockCount),
        //     status,
        //     price
        //   });
        // }
      });
    }
  }
}
