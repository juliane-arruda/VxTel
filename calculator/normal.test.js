const calculateNormalPrice = require('./normal');

test('20 minutes', () => {
  expect(calculateNormalPrice(1.90, 20)).toBe(38);
})

test('80 minutes', () => {
  expect(calculateNormalPrice(1.70, 80)).toBe(136);
})

test('200 minutes', () => {
  expect(calculateNormalPrice(1.90, 200)).toBe(380);
})