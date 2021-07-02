import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from 'src/order/entities/offer.entity';
import { Repository } from 'typeorm';

@Controller()
export default class OfferCreateEvent {
  constructor(
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>,
  ) {}

  @MessagePattern('offer_created')
  async getUpdatedOfferInfo(@Payload() message: any) {
    const { data } = JSON.parse(message);
    const {
      uuid,
      name,
      description,
      total_price: totalPrice,
      offer_detail: offerDetail,
      start_date: startDate,
      end_date: endDate,
      status,
      created_at: createdAt,
      created_by: createdBy,
    } = JSON.parse(data);

    await this.offerRepository.save({
      uuid,
      name,
      description,
      total_price: Number(totalPrice),
      offer_detail: offerDetail,
      start_date: startDate,
      end_date: endDate,
      status: Number(status),
      created_at: createdAt,
      created_by: createdBy,
    });
  }
}
