import { sum, multiply, subtract, division } from '../maths';

test('Sum test', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Subtract test', () => {
  expect(subtract(1, 2)).toBe(-1);
});

test('Multiply test', () => {
  expect(multiply(4, 5)).toBe(20);
});

test('Division test', () => {
  expect(division(25, 5)).toBe(5);
});
