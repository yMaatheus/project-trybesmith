import express from 'express';
import UsersController from '../controllers/users.controller';

const router = express.Router();

const usersController = new UsersController();

router.route('/users')
  .post(usersController.create);

router.route('/login')
  .post(usersController.login);

export default router;