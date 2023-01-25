import { Request, Response } from 'express';
import productsService from '../services/products.service';

const create = async (req: Request, res: Response) => {
  const product = req.body;
  const { status, data } = await productsService.create(product);
  res.status(status).json(data);
};

export default { create };