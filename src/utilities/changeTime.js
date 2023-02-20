const { parse } = require('date-fns');

const dateFormat = (date, typeFormat = 'yyyy-MM-dd HH:mm:ss') => {
  const newdate = date.replace(/(PM|AM)/, '').trim();
  return parse(
    `${newdate}+00`,
    `${typeFormat}` + 'X',
    new Date(),
  ).toISOString();
};

module.exports = { dateFormat };
