import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResponseService } from '@the-tech-nerds/common-services';
import { OrderController } from './controller/order.controller';
import { Order } from './entities/order.entity';
import { CreateOrderService } from './service/create-order.service';
import { OrderStatusService } from './service/order-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [ApiResponseService, OrderStatusService, CreateOrderService],
  controllers: [OrderController],
  exports: [],
})
export class OrderModule {}
