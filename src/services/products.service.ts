import Product from '../interfaces/products.interface';
import connection from '../models/connection';
import ProductModel from '../models/products.model';

export default class ProductService {
  public productModel: ProductModel;

  constructor() {
    this.productModel = new ProductModel(connection);
  }

  public create = async (product: Product) => 
    this.productModel.create(product);

  public getAll = async () => 
    this.productModel.getAll();
}
