// After of each test
afterEach(() => console.log('After of each test'));
afterAll(() => console.log('After all of tests'));

// Before of each test
beforeEach(() => console.log('Before of each test'));
beforeAll(() => console.log('Before all of tests'));

describe('Prepare before execute', () => {
  test('should be true', () => {
    expect(true).toBeTruthy();
  });
  
});
