import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResponseService } from '@the-tech-nerds/common-services';
import { Inventory } from './entities/inventory.entity';
import InventoryCreateEvent from './events/inventory-create.event';
import InventoryUpdateEvent from './events/inventory-update.event';
import InventoryCreateService from './services/inventory-create.service';
import InventoryUpdateService from './services/inventory-update.service';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory])],
  providers: [
    ApiResponseService,
    InventoryCreateService,
    InventoryUpdateService,
  ],
  controllers: [InventoryCreateEvent, InventoryUpdateEvent],
  exports: [],
})
export class InventoryModule {}
