import { ResultSetHeader } from 'mysql2/promise';
import { TProduct } from '../types';
import connection from './connection';

export async function insert(post: TProduct): Promise<TProduct> {
  const { name, amount } = post;
  const [result] = await connection
    .execute<ResultSetHeader>('INSERT INTO Trybesmith.products VALUES (?, ?)', [name, amount]);
  const { insertId: id } = result;
  return { id, name, amount };
}

export default insert;