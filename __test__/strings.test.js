describe('Test string texts', () => {
  const text = 'A nice text';

  test('should contain next text', () => {
    expect(text).toMatch(/nice/);
  });
  test('should not contain next text', () => {
    expect(text).not.toMatch(/beautiful/);
  });
  test('check string size', () => {
    expect(text).toHaveLength(11);
  });
  
});
