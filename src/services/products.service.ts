import connection from '../models/connection';
import ProductModel from '../models/product.model';
import Product from '../interfaces/product.interface';
import { validateCreateProduct } from './validations/products.validation';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    validateCreateProduct(product);
    const newProduct = await this.model.create(product);

    return newProduct;
  }
}
