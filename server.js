require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const morgan = require('morgan');

const app = express();

app
  .use(cors())
  .use(express.json({ limit: '50mb' }))
  .use(express.urlencoded({ limit: '50mb', extended: true }))
  // .use(
  //   morgan((tokens, req, res) => {
  //     const morganConfig = [
  //       `Remote Address: ${req.ip}` || req.connection.remoteAddress,
  //       `Method: ${tokens.method(req, res)}`,
  //       `URL: ${tokens.url(req, res)}`,
  //       `Params: ${JSON.stringify(req.params)}`,
  //       `Body: ${JSON.stringify(req.body)}`,
  //       `Status: ${tokens.status(req, res)}`,
  //       `Response Time: ${tokens['response-time'](req, res)}ms`,
  //       `Response:${res.body}`,
  //     ];
  //     return morganConfig.join(` * `);
  //   }),
  // )
  .use(helmet());

app.use('/api', require('./src/routes'));

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`listen in port ${PORT}`);
});
