import express from 'express';

import OrdersController from '../controllers/orders.controller';
import authMiddleware from '../middlewares/auth.middleware';

const router = express.Router();

const ordersController = new OrdersController();

router.route('/')
  .get(ordersController.getAll)
  .post(authMiddleware, ordersController.create);

export default router;