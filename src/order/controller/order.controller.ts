import { Body, Controller, Post, Res } from '@nestjs/common';
import {
  ApiResponseService,
  CurrentUser,
} from '@the-tech-nerds/common-services';
import { Response } from 'express';
import { Order } from '../entities/order.entity';
import { OrderRequest } from '../requets/order.request';
import { CreateOrderService } from '../service/create-order.service';

@Controller()
export class OrderController {
  constructor(
    private readonly createOrderService: CreateOrderService,
    private readonly apiResponseService: ApiResponseService,
  ) {}

  @Post('/')
  async createOrder(
    @CurrentUser('id') userId: any,
    @Body() orderRequest: OrderRequest,
    @Res() res: Response,
  ): Promise<Response<ResponseModel>> {
    const data = await this.createOrderService.create(userId, orderRequest);
    return this.apiResponseService.successResponse(
      ['Product created successfully'],
      data as Order,
      res,
    );
  }
}
