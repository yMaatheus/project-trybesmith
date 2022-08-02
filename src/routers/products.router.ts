import express from 'express';
import ProductsController from '../controllers/products.controller';

const router = express.Router();

const productsController = new ProductsController();

router.route('/')
  .post(productsController.create)
  .get(productsController.getAll);

export default router;