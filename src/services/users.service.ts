import connection from '../models/connection';
import IUser from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import { validateCreate } from './validations/users.validation';
import { createToken } from '../utils/jwt.util';

export default class UserService {
  private model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUser): Promise<object> {
    validateCreate(user);
    const newUser = await this.model.create(user);

    delete newUser.password;

    const token = createToken(newUser);

    return { token };
  }
}