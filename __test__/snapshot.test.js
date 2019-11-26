import { getCharacter } from '../snapshot';
import rick from '../rick.json';

describe('Snapshot test', () => {
  test('Snapshot', () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test('Snapshot failure', () => {
    const user = {
      createdAt: new Date(),
      id: Math.floor(Math.random() * 20),
    };

    expect(user).toMatchSnapshot();
  });

  test('Snapshot exception', () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "Miguel Angel",
    };

    expect(user).toMatchSnapshot({
      id: expect.any(Number),
    });
  });

});
