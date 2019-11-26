import '@babel/polyfill';
import { getDataFromApi } from '../promise';

describe('Test Async/Await', () => {
  test('Get data from API', async () => {
    const url = 'https://rickandmortyapi.com/api/character/';
    const data = await getDataFromApi(url);
    
    expect(data.results.length).toBeGreaterThan(0);
    
    const urlRick = 'https://rickandmortyapi.com/api/character/1';
    const dataRick = await getDataFromApi(urlRick).then(data => data);

    expect(dataRick.name).toEqual('Rick Sanchez');
  });

});
