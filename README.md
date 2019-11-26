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
➜  yarn add -D jest
➜  yarn add -D --exact @babel/core @babel/preset-env babel-jest babel-polyfill
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

