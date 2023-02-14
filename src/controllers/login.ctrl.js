// eslint-disable-next-line no-unused-vars
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

const getLogin = async (req, res) => {
  try {
    const { Usuario, Clave } = req.body;

    const getDataLogin = await prisma.tbl_md_users.findFirst({
      where: {
        Usuario,
        Clave,
      },
      select: {
        Privilegios: true,
        Activo: true,
      },
    });

    res.json(getDataLogin);
  } catch (err) {
    res.json({ err });
  }
};

module.exports = { getLogin };
