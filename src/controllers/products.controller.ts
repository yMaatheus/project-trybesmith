import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/products.service';

export default class ProductsController {
  private service: ProductService;

  constructor() {
    this.service = new ProductService();
  }

  public create = async (req: Request, res: Response) => {
    const product = await this.service.create(req.body);
  
    return res.status(StatusCodes.CREATED).json(product);
  };

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.service.getAll();

    return res.status(StatusCodes.OK).json(products);
  };
}