const express = require('express');

const router = express.Router();

const {
  getFlightsValidator,
  updateCreateFlightsValidator,
} = require('../validators/flights.validator');

const {
  getFlight,
  updateCreateFlights,
} = require('../controllers/flights.ctrl');

router.get('/:flight', getFlightsValidator, getFlight);
router.post('/', updateCreateFlightsValidator, updateCreateFlights);
module.exports = router;
