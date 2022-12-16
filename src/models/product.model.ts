import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../types/Product';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async registerProduct({ name, amount }: Product) {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
      [name, amount],
    );
    console.log(result);
    return { id: result.insertId, name, amount };
  }
}