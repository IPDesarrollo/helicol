const express = require('express');

const router = express.Router();

const {
  createUpdateFlightsDetailsValidator,
} = require('../validators/flights-details.validator');

const {
  createUpdateFlightDetails,
} = require('../controllers/flights-details.ctrl');

router.post(
  '/',
  createUpdateFlightsDetailsValidator,
  createUpdateFlightDetails,
);
module.exports = router;
