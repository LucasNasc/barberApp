import { Router } from 'express';

import UserController from './app/controllers/UserController';
// eslint-disable-next-line import/no-named-as-default
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
