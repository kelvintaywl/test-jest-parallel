const { mul } = require('./arith-2');

test('3 * 4 = 12', () => {
  expect(mul(3, 4)).toBe(12);
});
