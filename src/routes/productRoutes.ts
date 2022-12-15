import { Router } from 'express';
import * as productController from '../controllers/productsController';

const productRouter = Router();

productRouter.post('/', productController.insertProducts.bind(productController));

export default productRouter;