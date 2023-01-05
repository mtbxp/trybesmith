import { Request, Response, NextFunction } from 'express';
import * as productsJoiSchema from './shared/productsJoiSchema';

export default function validateProducts(req: Request, res: Response, next: NextFunction) {
  const schema = productsJoiSchema.default();

  const { error } = schema.validate(req.body);

  if (error) {
    if (error.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    } 
    return res.status(422).json({ message: error.details[0].message });
  }
  next();
}