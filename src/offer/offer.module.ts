import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApiResponseService } from '@the-tech-nerds/common-services';
import { Offer } from './entities/offer.entity';
import OfferCreateEvent from './events/offer-create.event';
import OfferCreateService from './services/offer-create.service';
import OfferUpdateService from './services/offer-update.service';

@Module({
  imports: [TypeOrmModule.forFeature([Offer])],
  providers: [ApiResponseService, OfferCreateService, OfferUpdateService],
  controllers: [OfferCreateEvent, OfferUpdateService],
  exports: [],
})
export class OfferModule {}
