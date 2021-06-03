import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResponseService } from '@the-tech-nerds/common-services';
import { OrderController } from './controller/order.controller';
import { StudentController } from './controller/student.controller';
import { Order } from './entities/order.entity';
import { Student } from './entities/student.entity';
import { CreateOrderService } from './service/create-order.service';
import { StudentService } from './service/student.service';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Order])],
  providers: [ApiResponseService, StudentService, CreateOrderService],
  controllers: [StudentController, OrderController],
  exports: [],
})
export class OrderModule {}
