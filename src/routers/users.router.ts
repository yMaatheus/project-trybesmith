import express from 'express';
import UsersController from '../controllers/users.controller';

const router = express.Router();

const usersController = new UsersController();

router.route('/')
  .post(usersController.create);

export default router;