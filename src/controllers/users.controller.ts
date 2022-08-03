import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UsersService from '../services/users.service';

export default class UsersController {
  private service: UsersService;

  constructor() {
    this.service = new UsersService();
  }

  public create = async (req: Request, res: Response) => {
    const token = await this.service.create(req.body);

    return res.status(StatusCodes.CREATED).json(token);
  };
}
