import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Inventory } from '../entities/inventory.entity';
import InventoryUpdateService from '../services/inventory-update.service';

@Controller()
export default class InventoryUpdateEvent {
  constructor(private inventoryUpdateService: InventoryUpdateService) {}

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
      await this.inventoryUpdateService.execute(uuid, {
        product_variance_id: Number(productVarianceId),
        amount: Number(stockCount),
        status,
        price,
      } as Inventory);
    }
  }
}
