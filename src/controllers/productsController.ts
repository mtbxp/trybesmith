import { Request, Response } from 'express';
import { TProduct } from '../types';
import { status } from '../utils/status';
import * as productsService from '../services/productsService';

export async function insert(req: Request, res: Response) {
  const post = req.body as TProduct;
  const newProduct = await productsService.insert(post);

  return res.status(status.OK).json(newProduct);
}

export default insert;