const formatData = (obj) => Object.fromEntries(Object.entries(obj).filter((value) => value[1]));

module.exports = formatData;
