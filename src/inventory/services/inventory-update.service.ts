import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from '../entities/inventory.entity';

@Controller()
export default class InventoryUpdateService {
  constructor(
    @InjectRepository(Inventory)
    private inventoryRepository: Repository<Inventory>,
  ) {}

  async execute(uuid: string, inventoryData: Inventory) {
    const inventory = await this.inventoryRepository.findOne({
      where: {
        uuid,
      },
    });

    if (inventory) {
      await this.inventoryRepository.update(inventory.id, inventoryData);
    }
  }
}
