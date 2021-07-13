import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import OfferUpdateService from '../services/offer-update.service';

@Controller()
export default class OfferUpdateEvent {
  constructor(private offerUpdateSerice: OfferUpdateService) {}

  @MessagePattern('offer_updated')
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
      slug,
      stock,
      updated_at: updatedAt,
      updated_by: updatedBy,
    } = JSON.parse(data);

    if (uuid) {
      await this.offerUpdateSerice.execute(uuid, {
        uuid,
        name,
        description,
        slug,
        stock: Number(stock),
        total_price: Number(totalPrice),
        offer_detail: offerDetail,
        start_date: startDate,
        end_date: endDate,
        status: Number(status),
        updated_at: updatedAt,
        updated_by: Number(updatedBy),
      });
    }
  }
}
