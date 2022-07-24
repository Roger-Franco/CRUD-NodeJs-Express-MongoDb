import { Router } from 'express';
import {
  getAll, createUser, deleteUSer, updateUser,
} from '../controllers/usuario.controller';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'connected' });
});

routes.get('/usuario', getAll);
routes.post('/usuario', createUser);
routes.delete('/usuario/:id', deleteUSer);
routes.put('/usuario/:id', updateUser);

export default routes;
