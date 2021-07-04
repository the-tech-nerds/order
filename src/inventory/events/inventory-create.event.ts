import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Inventory } from '../entities/inventory.entity';
import InventoryCreateService from '../services/inventory-create.service';

@Controller()
export default class InventoryCreateEvent {
  constructor(private inventoryCreateService: InventoryCreateService) {}

  @MessagePattern('inventory_created')
  async getUpdatedInventoryInfo(@Payload() message: any) {
    const { data } = JSON.parse(message);
    const inventoryItems = JSON.parse(data);

    if (inventoryItems && inventoryItems.length > 0) {
      let formattedInventories: Inventory[] = [];
      inventoryItems.map(async (item: any) => {
        const {
          product_variance_id: productVarianceId,
          stock_count: stockCount,
          uuid,
          status,
          price,
        } = item;

        formattedInventories = [
          ...formattedInventories,
          {
            product_variance_id: Number(productVarianceId),
            amount: Number(stockCount),
            uuid,
            status,
            price,
          } as Inventory,
        ];
      });

      await this.inventoryCreateService.execute(formattedInventories);
    }
  }
}
