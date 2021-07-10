import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResponseService } from '@the-tech-nerds/common-services';
import { Inventory } from './entities/inventory.entity';
import DiscountCreateEvent from './events/inventory-create.event';
import DiscountUpdateEvent from './events/inventory-update.event';
import DiscountCreateService from './services/inventory-create.service';
import DiscountUpdateService from './services/inventory-update.service';

@Module({
  imports: [TypeOrmModule.forFeature([Inventory])],
  providers: [ApiResponseService, DiscountCreateService, DiscountUpdateService],
  controllers: [DiscountCreateEvent, DiscountUpdateEvent],
  exports: [],
})
export class InventoryModule {}
