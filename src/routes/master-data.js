const express = require('express');

const router = express.Router();

const {
  getCustomers,
  getFuelProvider,
  getPilots,
  getRoutes,
} = require('../controllers/master-data.ctrl');

router.get('/customers', getCustomers);
router.get('/fuel-providers', getFuelProvider);
router.get('/pilots', getPilots);
router.get('/routes', getRoutes);
module.exports = router;
