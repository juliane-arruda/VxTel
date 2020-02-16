const calculateNormalPrice = (minutePrice, totalMin) => {

  const total = minutePrice * totalMin;
  return +total.toFixed(2);
}

module.exports = calculateNormalPrice;