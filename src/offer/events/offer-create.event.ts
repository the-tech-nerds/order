import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import OfferCreateService from '../services/offer-create.service';

@Controller()
export default class OfferCreateEvent {
  constructor(private readonly offerCreateService: OfferCreateService) {}

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

    await this.offerCreateService.execute({
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
