import { Router } from 'express';
import {
  getAll, createUser, deleteUSer, updateUser,
} from '../controllers/usuario.controller';
import { requestLogin } from '../models/usuario.model';
import VerifyToken from '../middleware/usuarios.middleware';

const routes = new Router();

routes.get('/', (req, res) => {
  res.status(200).json({ ok: 'connected' });
});

routes.get('/usuario', VerifyToken, getAll);
routes.get('/login', requestLogin);
routes.post('/usuario', VerifyToken, createUser);
routes.delete('/usuario/:id', VerifyToken, deleteUSer);
routes.put('/usuario/:id', VerifyToken, updateUser);

export default routes;
