import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { Offer } from 'src/order/entities/offer.entity';
import { Repository } from 'typeorm';

@Controller()
export default class OfferUpdateEvent {
  constructor(
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>,
  ) {}

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
      updated_at: updatedAt,
      updated_by: updatedBy,
    } = JSON.parse(data);

    if (uuid) {
      const offer = await this.offerRepository.findOne({
        where: {
          uuid,
        },
      });
      if (offer) {
        await this.offerRepository.update(offer.id, {
          uuid,
          name,
          description,
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
}
