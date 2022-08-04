import express from 'express';

import OrdersController from '../controllers/orders.controller';

const router = express.Router();

const ordersController = new OrdersController();

router.route('/')
  .get(ordersController.getAll);

export default router;