const getPricePerMinute = require('./priceTable');

test('DDD 011 to 016', () => {
  expect(getPricePerMinute('011', '016')).toBe(1.90);
})

test('DDD 011 to 020', () => {
  expect(getPricePerMinute('011', '020')).toBe(null);
})

test('DDD 081 to 016', () => {
  expect(getPricePerMinute('081', '016')).toBe(null);
})