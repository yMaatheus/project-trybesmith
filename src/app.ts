import express from 'express';

import route from './routers';

const app = express();

app.use(express.json());

app.use('/products', route.products);

export default app;
