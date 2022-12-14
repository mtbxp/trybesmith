import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  public user = new UserService();

  create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.user.create(user);
    res.status(201).json(userCreated);
  };
}