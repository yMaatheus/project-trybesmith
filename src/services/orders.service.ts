import Order from '../models/order.model';
import connection from '../models/connection';
import IOrder from '../interfaces/order.interface';
import IOrderData from '../interfaces/orderData.interface';

const parseToIOrder = (acc: IOrder[], { id, userId, productId }: IOrderData) => {
  const orderAcc = acc[id];
  if (!orderAcc) return [...acc, { id, userId, productsIds: [productId] }];
  orderAcc.productsIds.push(productId);
  return acc;
};

export default class OrderService {
  private model: Order;

  constructor() {
    this.model = new Order(connection);
  }

  public async getAll(): Promise<IOrder[]> {
    const ordersData = await this.model.getAll();

    const orders = ordersData.reduce((acc: IOrder[], orderData): IOrder[] => 
      parseToIOrder(acc, orderData), []);

    return orders;
  }
}