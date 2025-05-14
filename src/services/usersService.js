const usersModel = require("../models/usersModel");

exports.getAllUsers = () => usersModel.getAllUsers();

exports.getUserById = (id) => usersModel.getUserById(id);

exports.createUser = (name, email) => usersModel.createUser(name, email);

exports.updateUser = (id, name, email) =>
  usersModel.updateUser(id, name, email);

exports.deleteUser = (id) => usersModel.deleteUser(id);
