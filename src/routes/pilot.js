const express = require('express');

const router = express.Router();

const { createUpdatePilotValidator } = require('../validators/pilot.validator');

const { createUpdatePilot } = require('../controllers/pilot.ctrl');

router.post('/', createUpdatePilotValidator, createUpdatePilot);
module.exports = router;
