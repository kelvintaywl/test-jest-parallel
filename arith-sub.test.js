const { sub } = require('./arith');

test('5 - 6 = -1', () => {
  expect(sub(5, 6)).toBe(-1);
});
