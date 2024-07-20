import { bench, describe } from 'vitest';
import { isPlainObject as isPlainObjectToolkit } from 'es-toolkit';
import { isPlainObject as isPlainObjectLodash } from 'lodash';

describe('isPlainObject', () => {
  bench('es-toolkit/isPlainObject', () => {
    isPlainObjectToolkit({});
    isPlainObjectToolkit(Object.create(null));
    isPlainObjectToolkit(new Object());
    isPlainObjectToolkit([]);
    isPlainObjectToolkit(new Date());
    isPlainObjectToolkit(new Map());
    isPlainObjectToolkit(Buffer.from('123123'));
    isPlainObjectToolkit(new Uint8Array([1, 2, 3]));
  });

  bench('lodash/isPlainObject', () => {
    isPlainObjectLodash({});
    isPlainObjectLodash(Object.create(null));
    isPlainObjectLodash(new Object());
    isPlainObjectLodash([]);
    isPlainObjectLodash(new Date());
    isPlainObjectLodash(new Map());
    isPlainObjectLodash(Buffer.from('123123'));
    isPlainObjectLodash(new Uint8Array([1, 2, 3]));
  });
});
