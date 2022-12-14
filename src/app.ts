import express, { Express } from 'express';
import productRouter from './routes/product.routes';
// import userRouter from './routes/user.routes';
// import loginRouter from './routes/login.routes';

const app: Express = express();

app.use(express.json());

app.use('/products', productRouter);
// app.use('/users', userRouter);
// app.use('/login', loginRouter);

export default app;
