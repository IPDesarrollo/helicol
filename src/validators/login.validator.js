const { check } = require('express-validator');
const { validateResults } = require('../utilities/handleValidator');

const validatorLogin = [
  check('Usuario').optional().notEmpty().isString(),
  check('Clave').optional().notEmpty().isString(),
  (req, res, next) => validateResults(req, res, next),
];

module.exports = { validatorLogin };
