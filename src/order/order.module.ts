import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResponseService } from '@the-tech-nerds/common-services';
import { OrderController } from './controller/order.controller';
import { StudentController } from './controller/student.controller';
import { Inventory } from './entities/inventory.entity';
import { Offer } from './entities/offer.entity';
import { Order } from './entities/order.entity';
import { Student } from './entities/student.entity';
import InventoryCreateEvent from './events/inventory-create.event';
import InventoryUpdateEvent from './events/inventory-update.event';
import OfferCreateEvent from './events/offer/offer-create.event';
import OfferUpdateEvent from './events/offer/offer-update.event';
import { CreateOrderService } from './service/create-order.service';
import { StudentService } from './service/student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Order, Inventory, Offer])],
  providers: [ApiResponseService, StudentService, CreateOrderService],
  controllers: [
    StudentController,
    OrderController,
    InventoryUpdateEvent,
    InventoryCreateEvent,
    OfferUpdateEvent,
    OfferCreateEvent,
  ],
  exports: [],
})
export class OrderModule {}
