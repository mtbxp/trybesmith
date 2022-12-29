import { RowDataPacket } from 'mysql2';
import { Orders } from '../interfaces/Order';
import connection from './connection';

export default async function findAllOrders(): Promise<Orders> {
  const query = `SELECT o.id, o.user_id AS 'userId', JSON_ARRAYAGG(p.id) AS 'productsIds'
  FROM Trybesmith.orders o
  INNER JOIN Trybesmith.products p 
  WHERE p.order_id = o.id 
  GROUP BY o.id;`;

  const [response] = await connection.execute<RowDataPacket[]>(query);

  return JSON.parse(JSON.stringify(response));
}