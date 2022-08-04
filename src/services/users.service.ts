import connection from '../models/connection';
import IUser from '../interfaces/user.interface';
import UserModel from '../models/user.model';
import { validateCreate, validateUsernamePassword } from './validations/users.validation';
import { createToken } from '../utils/jwt.util';
import CustomError from '../utils/customError.util';

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

  public async login(username: string, password: string): Promise<object> {
    validateUsernamePassword(username, password);
    const user = await this.model.getByName(username);

    if (!user || user.password !== password) {
      throw new CustomError('Unauthorized', 'Username or password invalid'); 
    }

    delete user.password;

    const token = createToken(user);

    return { token };
  }
}