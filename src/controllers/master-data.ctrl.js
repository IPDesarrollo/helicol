// eslint-disable-next-line no-unused-vars
const { PrismaClient, Prisma } = require('@prisma/client');

const prisma = new PrismaClient();

const getCustomers = async (req, res) => {
  try {
    const getAllCustomer = await prisma.tbl_md_rp_customers.findMany({
      where: {
        record_status: '1',
      },
      select: {
        company_name: true,
        id: true,
        nit: true,
        phone_company: true,
        pin: true,
        street1: true,
        type_customer: true,
        record_status: true,
      },
    });

    res.json({ getAllCustomer });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

const getFuelProvider = async (req, res) => {
  try {
    const getAllFuelProvider = await prisma.tbl_md_rp_fuel_providers.findMany({
      where: {
        record_status: '1',
      },
      select: {
        pk_fuel_provider: true,
        fuel_provider_name: true,
        record_status: true,
        address_1: true,
        address_2: true,
        address_3: true,
        city: true,
      },
    });

    res.json({ getAllFuelProvider });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

const getPilots = async (req, res) => {
  try {
    const getAllPilots = await prisma.tbl_md_rp_pilots.findMany({
      where: {
        record_status: '1',
      },
      select: {
        account_status: true,
        activo: true,
        department: true,
        last_name: true,
        name: true,
        password: true,
        pch: true,
        posicion: true,
        primary: true,
        registration_number: true,
        username: true,
        pk_pilots: true,
        record_status: true,
      },
    });

    res.json({ getAllPilots });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

const getRoutes = async (req, res) => {
  try {
    const getAllRoutes = await prisma.tbl_md_rp_routes.findMany({
      where: {
        record_status: '1',
      },
      select: {
        pk_routes: true,
        route_city: true,
        route_department: true,
        route_description: true,
        route_iata: true,
        record_status: true,
      },
    });

    res.json({ getAllRoutes });
  } catch (err) {
    console.log(err);
    res.json({ err });
  }
};

module.exports = {
  getCustomers,
  getFuelProvider,
  getPilots,
  getRoutes,
};
