import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces/interfaces';

const addProd = async (product: Product) => {
  const { name, amount } = product;
  const [result] = await connection.execute <ResultSetHeader>(
    'INSERT INTO Trybesmith.Products(name, amount) VALUE (?, ?)',
    [name, amount],
  );
  const { insertId } = result;
  // const response = { insertId, name, amount };
  // console.log(insertId, 'PM_____12');
  return { id: insertId, name, amount };
};

const getAllProds = async () => {
  const [result] = await connection.execute <RowDataPacket[]>(
    'SELECT * FROM Trybesmith.Products',
  );
  return result;
};

export default {
  addProd,
  getAllProds,
};
