/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
const express = require('express');
const fs = require('fs');

const router = express.Router();

const { handleErrorResponse } = require('../utilities/handleError');

const pathRouter = `${__dirname}`;

const removeExtension = (fileName) => fileName.split('.').shift();

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithOutExt = removeExtension(file);
  const skip = ['index'].includes(fileWithOutExt);
  if (!skip) {
    router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`));
    console.log(`Ruta Cargada -> /${fileWithOutExt}`);
  }
  return 0;
});

router.get('*', (req, res) => {
  handleErrorResponse(res, 'NOT-FOUND', 404);
});

module.exports = router;
