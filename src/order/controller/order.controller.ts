import { Body, Controller, Param, Post, Res } from '@nestjs/common';
import {
  ApiResponseService,
  CurrentUser,
} from '@the-tech-nerds/common-services';
import { Response } from 'express';
import { Order } from '../entities/order.entity';
import { OrderCreateRequest } from '../requets/orderCreateRequest';
import { CreateOrderService } from '../service/create-order.service';
import { OrderStatusService } from '../service/order-status.service';

@Controller()
export class OrderController {
  constructor(
    private readonly createOrderService: CreateOrderService,
    private readonly orderStatusService: OrderStatusService,
    private readonly apiResponseService: ApiResponseService,
  ) {}

  @Post('/')
  async createOrder(
    @CurrentUser('id') userId: any,
    @Body() orderRequest: OrderCreateRequest,
    @Res() res: Response,
  ): Promise<Response<ResponseModel>> {
    const data = await this.createOrderService.create(userId, orderRequest);
    return this.apiResponseService.successResponse(
      ['Product created successfully'],
      data as Order,
      res,
    );
  }

  @Post('/:id/status')
  async changeStatus(
    @CurrentUser('id') userId: any,
    @Param('id') orderId: number,
    @Body() status: number,
    @Res() res: Response,
  ): Promise<Response<ResponseModel>> {
    const data = await this.orderStatusService.execute(orderId, userId, status);
    return this.apiResponseService.successResponse(
      ['Order status has been changed successfully'],
      data as Order,
      res,
    );
  }
}
