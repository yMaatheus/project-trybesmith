import connection from '../models/connection';
import ProductModel from '../models/product.model';
import IProduct from '../interfaces/product.interface';
import { validateCreateProduct } from './validations/products.validation';

export default class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: IProduct): Promise<IProduct> {
    validateCreateProduct(product);
    const newProduct = await this.model.create(product);

    return newProduct;
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();

    return products;
  }
}
