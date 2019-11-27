### Qué son las pruebas unitarias?

Las pruebas unitarias lo que hacen es tomar todos tus proyectos o esos bloques de código y descomponerlo en pequeñas partes que vamos a probar. Así, todo lo que vamos pasando sabemos que esta funcionando correctamente y que no hay ningún inconveniente o bug.

Las pruebas unitarias comprueban lo que son casos estándares (suposición explícita) es decir, no son perfectas. Las características de las pruebas unitarias son:

- Automatizable: Deben correr sin ningún proceso manual.
- Total Cobertura: Debemos de pasar por cada bloque escrito.
- Reutilizables: Podemos usarlas para probar otros bloques.
- Independientes: No pueden depender de otra prueba para funcionar.
- Rápidas de crear: TIenen que ser algo conciso que prueben algo muy particular.

**Ventajas de las pruebas unitarias:**

- Proporciona un trabajo ágil.
- Calidad del código.
- Detectar errores rapido.
- Facilita los cambios y favorece la integración.
- Proporciona información.
- Reduce el coste.

https://github.com/dwyl/learn-tdd

### ¿Qué es Jest?

Jest es una herramienta creada y mantenida por la comunidad open source con apoyo de Facebook. Jest surgió con el objetivo de agregar pruebas unitarias a proyectos con react pero ha sido tan importante que cada vez se emplea en mas proyectos con otros frameworks.

Jest no requiere configuraciones adicionales demasiado complejas para añadir pruebas a cualquiera de nuestros proyectos.

#### Instalación y Configuración

```bash
➜  yarn add -D jest @types/jest
➜  yarn add -D --exact @babel/core @babel/preset-env babel-jest @babel/polyfill
```

```bash
➜  mkdir __test__
```

- **maths.js**

```js
export const sum = (a, b) => {
  return a + b;
}

export const multiply = (a, b) => {
  return  a * b;
}

export const subtract = (a, b) => {
  return a - b;
}

export const division = (a, b) => {
  return a / b;
}
```

- **\_\_test\_\_/maths.test.js**

```js
import { sum, multiply, subtract, division } from '../maths';

test('Sum test', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Multiply test', () => {
  expect(multiply(4, 5)).toBe(20);
});
```

- **package.json**

```json
"scripts": {
  "test": "npx jest"
}
```

```bash
➜  ✗ yarn test
```

#### Matchers

- **\_\_test\_\_/matchers.test.js**

```js
describe('Common matchers', () => {
  const user = {
    name: "miguel",
    lastName: "angel"
  };

  const user2 = {
    name: "miguel2",
    lastName: "angel2"
  };

  test("Element equal", () => {
    expect(user).toEqual(user2);
  });

  test('Does not exactly complete', () => {
    expect(user).not.toEqual(user2);
  });
});
```

```bash
➜  yarn test matchers.test.js
```

#### Numbers

- **numbers.js**

```js
export const numbers = (a, b) => {
  return a + b;
};
```

- **\_\_test\_\_/numbers.test.js**

```js
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
```

```bash
➜  yarn test numbers.test.js
```

#### Truthiness

- **true.js**

```js
export const isNull = () => null;

export const isTrue = () => true;

export const isFalse = () => false;

export const isUndefined = () => undefined;
```

- **\_\_test\_\_/true.test.js**

```js
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
```

```bash
➜  yarn test true.test.js
```

#### Arrays and iterables

- **arrays.js**

```js
const fruits = ['banana', 'sandia', 'melón', 'naranja', 'limón', 'pepino'];
const colors = ['azul', 'verde', 'rojo', 'rosa', 'amarillo'];

export const arrayFruits = () => fruits;
export const arrayColors = () => colors;
```

- **\_\_test\_\_/arrays.test.js**

```js
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
  
});
```

```bash
➜  yarn test arrays.test.js
```

#### Coverage

- **package.json**

```json
"scripts": {
  "test:coverage": "npx jest --coverage"
}
```

```bash
➜  yarn test:coverage

------------|----------|----------|----------|----------|-------------------|
File        |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------|----------|----------|----------|----------|-------------------|
All files   |      100 |      100 |      100 |      100 |                   |
 arrays.js  |      100 |      100 |      100 |      100 |                   |
 maths.js   |      100 |      100 |      100 |      100 |                   |
 numbers.js |      100 |      100 |      100 |      100 |                   |
 true.js    |      100 |      100 |      100 |      100 |                   |
------------|----------|----------|----------|----------|-------------------|
```

open **coverage/lcov-report/index.html** file

#### Strings

- **\_\_test\_\_/strings.test.js**

```js
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
```

```bash
➜  yarn test strings.test.js
```

#### Watch - Monitoring

- **package.json**

```json
"scripts": {
  "test:watch": "npx jest --watch"
}
```

```bash
➜  yarn test:watch

Test Suites: 6 passed, 6 total
Tests:       23 passed, 23 total
Snapshots:   0 total
Time:        1.976s, estimated 2s
Ran all test suites related to changed files.

Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

#### Setup and Teardown

A menudo, mientras escribe pruebas, tiene que realizar algún trabajo de configuración antes de ejecutar las pruebas, y tiene que terminar algún trabajo después de la ejecución de las pruebas. Jest proporciona funciones de ayuda para manejar esto.

- **\_\_test\_\_/setup.test.js**

```js
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
```

```bash
➜  yarn test setup.test.js
```

### Testing Asynchronous Code

#### Callbacks

- **callbacks.js**

```js
export const callbackHell = (callback) => {
  callback('Hello JavaScript');
};
```

- **\_\_test\_\_/callbacks.test.js**

```js
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
```

```bash
➜  yarn test callbacks.test.js
```

#### Promises

```bash
➜  yarn add axios --exact 
```

- **promise.js**

```js
import axios from 'axios';

export const getDataFromApi = url => {
  return axios.get(url)
    .then(({ data }) => data)
    .catch(error => error);
};
```

- **\_\_test\_\_/promise.test.js**

```js
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
});
```

```bash
➜  yarn test promise.test.js
```

#### .resolves / .rejects

- **\_\_test\_\_/promise.test.js**

```js
describe('Test promises', () => {
  // ...

  test('Resolves an "hello"', () => {
    return expect(Promise.resolve('hello')).resolves.toBe('hello');
  });

  test('Rejects with an error', () => {
    return expect(Promise.reject('ERROR')).rejects.toBe('ERROR');
  });
});
```

```bash
➜  yarn test promise.test.js
```

#### Async/Await

- **\_\_test\_\_/async.test.js**

```js
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
```

```bash
➜  yarn test async.test.js
```

### Snapshot Testing

Las pruebas de instantáneas son una herramienta muy útil siempre que desee asegurarse de que su IU no cambie inesperadamente.

- **rick.json**

```json
{
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "gender": "Male"
}
```

- **snapshot.js**

```js
export const getCharacter = data => ({
  "id": data.id,
  "name": data.name,
  "status": data.status,
  "species": data.species,
  "gender": data.gender,
});
```

- **\_\_test\_\_/snapshot.test.js**

```js
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
```

```bash
➜  yarn test snapshot.test.js

➜  yarn test -u
```

### React.js

https://github.com/gndx/platzi-react-jest

```bash
➜  yarn add -D enzyme enzyme-adapter-react-16 --exact
```

- **platzi-react-jest/src/\_\_test\_\_/Hello.test.js**

```jsx
import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hello from '../components/Hello';

Enzyme.configure({ adapter: new Adapter() });

describe('Test React', () => {
  test('check the text than prop received', () => {
    const data = { title: 'Hello Jest' };
    const wrapper = mount(
      <Hello title={data.title} />
    );
    const h1 = wrapper.find('h1');

    expect(h1.text()).toBe('Hello Jest');
  });
  
});
```

```bash
➜  yarn test
```

### Vue.js
### Express.js
