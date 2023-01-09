import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const productsRouter = Router();

const pController = new ProductsController();

productsRouter.post('/', pController.create);

productsRouter.get('/', pController.getAllProducts);

export default productsRouter;
