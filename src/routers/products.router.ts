import express from 'express';
import ProductsController from '../controllers/products.controller';

const router = express.Router();

const productController = new ProductsController();

router.route('/')
  .post(productController.create);

export default router;