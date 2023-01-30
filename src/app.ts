import express from 'express';
import productsRoute from './routes/productsRoute';
import userRoute from './routes/usersRoute';
import orderRoute from './routes/ordersRoute';
import loginRoute from './routes/login';

const app = express();

app.use(express.json());

app.use(productsRoute);
app.use(userRoute);
app.use(orderRoute);
app.use(loginRoute);

export default app;
//
