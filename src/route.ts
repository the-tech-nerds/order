import { Routes } from 'nest-router';
import { OrderModule } from './order/order.module';

export const routes: Routes = [
  {
    path: '/order',
    module: OrderModule,
  },
];
