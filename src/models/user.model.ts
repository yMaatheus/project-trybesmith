import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IUser from '../interfaces/user.interface';

export default class UserModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser): Promise<IUser> {
    const { username, classe, level, password } = user;
    
    const query = `INSERT INTO Trybesmith.Users 
    (username, classe, level, password) VALUES (?, ?, ?, ?)`;

    const [{ insertId }] = await 
    this.connection.execute<ResultSetHeader>(query, [username, classe, level, password]);

    return { id: insertId, ...user };
  }

  public async getByName(username: string): Promise<IUser> {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ?';

    const [[user]] = await this.connection.execute<RowDataPacket[]>(query, [username]);

    return user as IUser;
  }
}