import { ResultSetHeader } from 'mysql2';
import connection from './connection';

import { Product, ProductDetail } from '../interfaces';

export async function create(product: ProductDetail): Promise<Product> {
  const { name, amount } = product;
  
  const query = 'INSERT INTO products (name, amount) VALUES (?, ?)';
  const values = [name, amount];
  
  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;
  
  const newProduct: Product = { id, name, amount };
  return newProduct;
}

export async function getAll(): Promise<Product[]> {
  const query = 'SELECT * FROM products';
  
  const [products] = await connection.execute(query);
  
  return products as Product[];
}