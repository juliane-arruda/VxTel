const calculatePrice = require('./faleMais');

test('FaleMais 30 using 20 minutes', () => {
  expect(calculatePrice(1.90, 20, 30)).toBe(0);
})

test('FaleMais 60 using 80 minutes', () => {
  expect(calculatePrice(1.70, 80, 60)).toBe(37.40);
})

test('FaleMais 120 using 200 minutes', () => {
  expect(calculatePrice(1.90, 200, 120)).toBe(167.20);
})