const { validationResult } = require('express-validator');

const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    return res.status(409).send({ erros: err.array() });
  }
};

module.exports = { validateResults };
