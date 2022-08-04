import { Pool } from 'mysql2/promise';
import IOrderData from '../interfaces/orderData.interface';

export default class Order {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrderData[]> {
    const query = `SELECT orders.id as id, orders.userId, products.id as productId
    FROM Trybesmith.Orders as orders 
    INNER JOIN Trybesmith.Products as products ON orders.id = products.orderId`;

    const [rows] = await this.connection.execute(query);

    return rows as IOrderData[];
  }
}