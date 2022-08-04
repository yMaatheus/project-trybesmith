import { Response, Request } from 'express';
import OrderService from '../services/orders.service';

export default class OrdersController {
  private service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  public getAll = async (_req: Request, res: Response) => {
    const orders = await this.service.getAll();

    res.status(200).json(orders);
  };
}