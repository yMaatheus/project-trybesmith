import express from 'express';
import 'express-async-errors';
import handleErrors from './middlewares/handleErrors.middleware';

import productsRouter from './routers/products.router';
import usersRouter from './routers/users.router';
import ordersRouter from './routers/orders.router';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);

app.use(handleErrors);

export default app;
