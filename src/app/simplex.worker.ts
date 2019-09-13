/// <reference lib="webworker" />
import { default as Module, NativeFraction } from '../native/simplex';
import { MatricialForm } from './parser/models/matricial-form';


addEventListener('message', ({ data }: { data: MatricialForm }) => {
  Module({ locateFile: (path: string) => `native/${path}` }).then(mod => {
    postMessage(mod.simplex(data.a, data.b, data.c));
  });
});
