const priceTable = require('./priceTable');
const faleMais = require('./faleMais');
const normal = require('./normal');

const calculator = (originDDD, destinyDDD, time, faleMaisMinutes) => {

  const priceMinute = priceTable(originDDD, destinyDDD);

  if (priceMinute === null) {
    return null;
  }

  return {
    faleMais: faleMais(priceMinute, time, faleMaisMinutes),
    normal: normal(priceMinute, time)
  };
};

module.exports = calculator;