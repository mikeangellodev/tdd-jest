import { sum, multiply, subtract, division } from '../maths';

test('Sum test', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Multiply test', () => {
  expect(multiply(4, 5)).toBe(20);
});
