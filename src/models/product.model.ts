import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: IProduct): Promise<IProduct> {
    const { name, amount } = product;
    
    const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

    const [{ insertId }] = await 
    this.connection.execute<ResultSetHeader>(query, [name, amount]);

    return { id: insertId, ...product };
  }

  public async getAll(): Promise<IProduct[]> {
    const query = 'SELECT id, name, amount, orderId FROM Trybesmith.Products';

    const [rows] = await this.connection.execute(query);

    return rows as IProduct[];
  }
}