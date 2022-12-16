import { Iuser } from '../types';
import connection from './connections';

export const registerAuserModel = async (userData: Iuser) => {
  const { username, vocation, level, password } = userData as Iuser;
  const QUERY = `INSERT INTO Trybesmith.users
  (username,vocation, level, password) VALUES (?,?,?,?)`;
  await connection.execute(QUERY, [username, vocation, level, password]);
};

export const getUserModel = async ({ username, password }: Iuser) => {
  const QUERY = 'SELECT * from Trybesmith.users where username = ? and `password` = ?';
  const [user] = await connection.execute(QUERY, [username, password]);
  const [userData] = user as Iuser[];
  return userData;
};
(async () =>
  console.log(await registerAuserModel({
    username: 'reigasal',
    vocation: 'Guerreiro',
    level: 10,
    password: '1dragaonasfsfoceu',
  })))();