import { IsNotEmpty } from 'class-validator';

export class Customer {
  @IsNotEmpty({ message: 'Customer name is missing or invalid' })
  cus_name: string;

  @IsNotEmpty({ message: 'Customer email is missing or invalid' })
  cus_email: string;

  cus_add1: string;

  cus_add2?: string;

  cus_city?: string;

  cus_state?: string;

  cus_postcode?: string;

  cus_country?: string;

  @IsNotEmpty({ message: 'Customer phone is missing or invalid' })
  cus_phone: string;

  cus_fax?: string;
}
