const express = require('express');

const router = express.Router();

const { createUpdateFuelValidator } = require('../validators/fuel.validator');

const { createUpdateFuel } = require('../controllers/fuel.ctrl');

router.post('/', createUpdateFuelValidator, createUpdateFuel);
module.exports = router;
