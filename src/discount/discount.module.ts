import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResponseService } from '@the-tech-nerds/common-services';
import { Discount } from './entities/discount.entity';
import DiscountCreateService from './services/discount-create.service';
import DiscountCreateEvent from './events/discount-create.event';
import DiscountUpdateEvent from './events/discount-update.event';
import DiscountUpdateService from './services/discount-update.service';

@Module({
  imports: [TypeOrmModule.forFeature([Discount])],
  providers: [ApiResponseService, DiscountCreateService, DiscountUpdateService],
  controllers: [DiscountCreateEvent, DiscountUpdateEvent],
  exports: [],
})
export class DiscountModule {}
