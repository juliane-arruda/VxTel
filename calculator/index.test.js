const calculator = require('./index');

test('FaleMais 30 using 20 minutes', () => {
  expect(calculator('011', '016', 20, 30)).toStrictEqual({
    faleMais: 0,
    normal: 38
  });
})

test('FaleMais 60 using 80 minutes', () => {
  expect(calculator('011', '017', 80, 60)).toStrictEqual({
    faleMais: 37.40,
    normal: 136
  });
})

test('FaleMais 120 using 200 minutes', () => {
  expect(calculator('018', '011', 200, 120)).toStrictEqual({
    faleMais: 167.20,
    normal: 380
  });
})

test('FaleMais 30 using 100 minutes', () => {
  expect(calculator('018', '017', 100, 30)).toBe(null);
})