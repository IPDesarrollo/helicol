const { check } = require('express-validator');
const { validateResults } = require('../utilities/handleValidator');

const createUpdatePilotValidator = [
  check('uuid_pilot').optional().notEmpty().isString(),
  check('pk_pilot').optional().notEmpty().isString(),
  check('flight_id').optional().notEmpty().isString(),
  check('arrival_time').optional().notEmpty().isString(),
  check('name').optional().notEmpty().isString(),
  check('rp_customer').optional().notEmpty().isString(),
  check('type').optional().notEmpty().isString(),
  check('username_created').optional().notEmpty().isString(),
  check('username_modified').optional().notEmpty().isString(),
  check('registration_number').optional().notEmpty().isString(),
  check('serial').optional().notEmpty().isString(),
  check('date_created').optional().notEmpty().isString(),
  check('date_modified').optional().notEmpty().isString(),
  check('timestamp_created').optional().notEmpty().isString(),
  check('timestamp_modified').optional().notEmpty().isString(),
  check('D_VFR').optional().notEmpty().isString(),
  check('A_VFR').optional().notEmpty().isString(),
  check('D_IFR').optional().notEmpty().isString(),
  check('A_IFR').optional().notEmpty().isString(),
  check('D_NOC').optional().notEmpty().isString(),
  check('A_NOC').optional().notEmpty().isString(),
  check('send_email').optional().notEmpty().isString(),
  (req, res, next) => validateResults(req, res, next),
];

module.exports = { createUpdatePilotValidator };
