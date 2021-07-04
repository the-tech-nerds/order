import { Controller } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from '../entities/offer.entity';

@Controller()
export default class OfferUpdateService {
  constructor(
    @InjectRepository(Offer)
    private offerRepository: Repository<Offer>,
  ) {}

  async execute(uuid: string, offerData: any) {
    const offer = await this.offerRepository.findOne({
      where: {
        uuid,
      },
    });

    if (offer) {
      await this.offerRepository.update(offer.id, offerData);
    }
  }
}
