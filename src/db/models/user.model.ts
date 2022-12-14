import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../../interfaces/user.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: User): Promise<User> => {
    const { username, vocation, level, password } = user;
    const query = `INSERT INTO Trybesmith.users (username, vocation, level, password)
    VALUES (?, ?, ?, ?)`;
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(query, [username, vocation, level, password]);

    return {
      id: insertId,
      ...user,
    };
  };
}