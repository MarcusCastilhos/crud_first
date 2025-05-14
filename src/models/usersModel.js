const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getAllUsers = () => {
  return prisma.users.findMany();
};

exports.getUserById = (id) => {
  return prisma.users.findUnique({
    where: {
      id: Number(id),
    },
  });
};

exports.createUser = (name, email) => {
  return prisma.users.create({
    data: { name, email },
  });
};

exports.updateUser = (id, name, email) => {
  return prisma.users.update({
    where: {
      id: Number(id),
    },
    data: { name, email },
  });
};

exports.deleteUser = (id) => {
  return prisma.users.delete({
    where: {
      id: Number(id),
    },
  });
};
