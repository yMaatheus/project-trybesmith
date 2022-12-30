import express from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import doc from '../swagger.json';

import handleErrors from './middlewares/handleErrors.middleware';

import productsRouter from './routers/products.router';
import usersRouter from './routers/users.router';
import ordersRouter from './routers/orders.router';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/products', productsRouter);
app.use(usersRouter);
app.use('/orders', ordersRouter);

app.use('/doc', swaggerUi.serve, swaggerUi.setup(doc));

app.use(handleErrors);

export default app;
