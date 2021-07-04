import { Routes } from 'nest-router';
import { OfferModule } from './offer/offer.module';
import { OrderModule } from './order/order.module';

export const routes: Routes = [
  {
    path: '/order',
    module: OrderModule,
  },
  {
    path: '/offer',
    module: OfferModule,
  },
];
