const express = require('express');

const router = express.Router();

const { validatorLogin } = require('../validators/login.validator');

const { getLogin } = require('../controllers/login.ctrl');

router.get('/', validatorLogin, getLogin);
module.exports = router;
