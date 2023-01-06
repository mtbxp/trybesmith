import express from 'express';
import ProductRoute from './routes/product.routes';
import UserRouter from './routes/user.routes';

const app = express();

app.use(express.json());
app.use(ProductRoute);
app.use(UserRouter);

export default app;
