import {
  getAll, newUser, userExists, deleta, updateUser,
} from '../models/usuario.model';

const todos = async () => {
  const users = await getAll();
  return users;
};

const criar = async ({ email, senha }) => {
  const usuario = await userExists({ email });

  if (usuario) return usuario;

  const user = await newUser({ email, senha });
  return user;
};

const deletar = async ({ id }) => {
  const usuario = await userExists({ id });
  if (!usuario) return { message: 'Usuário não encontrado' };
  const user = await deleta({ id });
  return user;
};

const atualizar = async ({ id, email, senha }) => {
  const usuario = await userExists({ id });
  if (!usuario) return { message: 'Usuário não encontrado' };
  const user = await updateUser({ id, email, senha });
  return user;
};

const login = async () => null;

export {
  todos, login, criar, deletar, atualizar,
};
