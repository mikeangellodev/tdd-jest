import { numbers } from '../numbers';

describe('Number comparison', () => {
  test('should greater than', () => {
    expect(numbers(3, 2)).toBeGreaterThan(3);
  });
  test('should greater than or equal', () => {
    expect(numbers(3, 2)).toBeGreaterThanOrEqual(5);
  });
  test('should less than', () => {
    expect(numbers(3, 2)).toBeLessThan(6);
  });
  test('should less than or equal', () => {
    expect(numbers(3, 2)).toBeLessThanOrEqual(5);
  });
  test('should float numbers', () => {
    expect(numbers(2.3, 0.2)).toBeCloseTo(2.5);
  });
  
});
