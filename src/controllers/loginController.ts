import { Request, Response } from 'express';
import * as userService from '../services/userService';
import isToken from '../auth/token';

export async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const user = await userService.getNameUser({ username, password });

    if (!user.length || user[0].password !== password) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const token = isToken({ username, password });

    return res.status(200).json({ token });
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Fields', err });
  }
}

export async function getAll(_req:Request, res: Response) {
  const users = await userService.getAll();

  return res.status(200).json(users);
}