import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResponseService } from '@the-tech-nerds/common-services';
import { OrderController } from './controller/order.controller';

import { Inventory } from './entities/inventory.entity';
import { Order } from './entities/order.entity';
import InventoryUpdateEvent from './events/inventory-update.event';
import { CreateOrderService } from './service/create-order.service';
import { OrderStatusService } from './service/order-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Inventory])],
  providers: [ApiResponseService, OrderStatusService, CreateOrderService],
  controllers: [OrderController, InventoryUpdateEvent],
  exports: [],
})
export class OrderModule {}
