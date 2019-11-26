import { isNull, isTrue, isFalse, isUndefined } from '../true';

describe('Test null results', () => {
  test('should be null', () => {
    expect(isNull()).toBeNull();
  });
});

describe('Test true results', () => {
  test('should be true', () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe('Test not true results', () => {
  test('should not be true', () => {
    expect(isFalse()).not.toBeTruthy();
  });
});

describe('Test false results', () => {
  test('should be false', () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe('Test undefined results', () => {
  test('should be undefined', () => {
    expect(isUndefined()).toBeUndefined();
  });
});
