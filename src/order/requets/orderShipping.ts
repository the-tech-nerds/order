import { IsNotEmpty } from 'class-validator';

export class OrderShipping {
  @IsNotEmpty({ message: 'Shipping method is missing or invalid' })
  shipping_method: string;

  num_of_item: number;

  ship_name?: string;

  ship_add1?: string;

  ship_add2?: string;

  ship_city?: string;

  ship_state?: string;

  ship_postcode?: string;

  ship_country?: string;
}
