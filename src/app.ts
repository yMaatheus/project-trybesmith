import express from 'express';
import 'express-async-errors';
import handleErrors from './middlewares/handleErrors.middleware';

import route from './routers';

const app = express();

app.use(express.json());

app.use('/products', route.products);

app.use(handleErrors);

export default app;
