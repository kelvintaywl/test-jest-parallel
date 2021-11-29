const { div } = require('./arith');

test('8 / 4 = 2', () => {
  expect(div(8, 4)).toBe(2);
});
