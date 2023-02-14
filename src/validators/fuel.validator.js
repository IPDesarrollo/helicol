const { check } = require('express-validator');
const { validateResults } = require('../utilities/handleValidator');

const createUpdateFuelValidator = [
  check('uuid_fuel').optional().notEmpty().isString(),
  check('pk_fuel').optional().notEmpty().isString(),
  check('date_created').optional().notEmpty().isString(),
  check('date_modified').optional().notEmpty().isString(),
  check('flight_id').optional().notEmpty().isString(),
  check('fuel_provider').optional().notEmpty().isString(),
  check('invoice_number').optional().notEmpty().isString(),
  check('month_created').optional().notEmpty().isString(),
  check('no_gallons').optional().notEmpty().isString(),
  check('place').optional().notEmpty().isString(),
  check('rp_customer').optional().notEmpty().isString(),
  check('serial').optional().notEmpty().isString(),
  check('timestamp_created').optional().notEmpty().isString(),
  check('timestamp_modified').optional().notEmpty().isString(),
  check('type').optional().notEmpty().isString(),
  check('username_created').optional().notEmpty().isString(),
  check('username_modified').optional().notEmpty().isString(),
  check('send_email').optional().notEmpty().isString(),
  (req, res, next) => validateResults(req, res, next),
];

module.exports = { createUpdateFuelValidator };
