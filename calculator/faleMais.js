const calculatePrice = (minutePrice, totalMin, minPlan) => {
  
  if (minPlan > totalMin) {
    return 0;
  }

  const exceeding = totalMin - minPlan;
  const total = minutePrice * 1.1 * exceeding;
  return +total.toFixed(2);
}

module.exports = calculatePrice;