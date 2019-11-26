import { getDataFromApi } from '../promise';

describe('Test promises', () => {
  test('Get data from API', () => {
    const url = 'https://rickandmortyapi.com/api/character/';

    return getDataFromApi(url)
      .then(data => {
        console.log(data.results.length);
        
        expect(data.results.length).toBeGreaterThan(0);
      });
  });

  test('Resolves an "hello"', () => {
    return expect(Promise.resolve('hello')).resolves.toBe('hello');
  });

  test('Rejects with an error', () => {
    return expect(Promise.reject('ERROR')).rejects.toBe('ERROR');
  });
  
});
