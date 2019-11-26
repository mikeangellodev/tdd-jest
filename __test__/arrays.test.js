import { arrayFruits, arrayColors } from '../arrays';

describe('Check if exist an element', () => {
  test('Contain a banana', () => {
    expect(arrayFruits()).toContain('melón');
  });
  test('Not contain a pera', () => {
    expect(arrayFruits()).not.toContain('pera');
  });
  test('Check array size', () => {
    expect(arrayFruits()).toHaveLength(6);
  });
  test('Check if exist a color', () => {
    expect(arrayColors()).toContain('verde');
  });
  
});
