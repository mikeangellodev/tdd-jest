import { callbackHell } from '../callbacks';

describe('Test a Callback', () => {
  test('Callback', done => {
    function otherCallback(data) {
      expect(data).toBe('Hello JavaScript');

      done();
    }

    callbackHell(otherCallback);
  });
  
});
