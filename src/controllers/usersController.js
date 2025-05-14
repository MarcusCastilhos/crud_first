const usersService = require("../services/usersService");

exports.getAllUsers = async (req, res) => {
  const users = await usersService.getAllUsers();
  res.json(users);
};

exports.getUserById = async (req, res) => {
  const user = await usersService.getUserById(req.params.id);
  if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
  res.json(user);
};

exports.createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await usersService.createUser(name, email);
    res.status(201).json(newUser);
  } catch (err) {
    res
      .status(400)
      .json({ error: "Erro ao criar usuário", details: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const updated = await usersService.updateUser(req.params.id, name, email);
    res.json(updated);
  } catch (err) {
    res
      .status(404)
      .json({ error: "Usuário não encontrado", details: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await usersService.deleteUser(req.params.id);
    res.json({ message: "Usuário deletado com sucesso" });
  } catch (err) {
    res
      .status(404)
      .json({ error: "Usuário não encontrado", details: err.message });
  }
};
