import { Router } from 'express';
// const userController = require('../controllers/userController');
import * as productsContoller from '../controllers/productsController';

// const midwares = require('../middlewares/middleWares');

// const token = require('../auth/validateJWT');

const productRoute = Router();
const userRoute = Router();

productRoute.post('/products/', productsContoller.addProduct);
productRoute.get('/products/', productsContoller.getAllProds);
// productRoute.post('/products/', midwares.ValidLogin, productsController.addProduct);

export {
  productRoute,
  userRoute,
};
