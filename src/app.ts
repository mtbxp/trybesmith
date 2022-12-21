import express from 'express';
import productRouter from './routes/productRoutes';
import userRouter from './routes/userRouter';
import orderRouter from './routes/orderRouter';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());

// app.get('/', (req, res) => insertController.getAll(req, res));
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);
app.use('/login', loginRouter);

export default app;
