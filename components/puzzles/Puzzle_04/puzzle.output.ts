import { count } from './puzzle.const';
import type generateInput from './puzzle.input';

const generateOutput = (input: ReturnType<typeof generateInput>) => {
  let sum = 0;
  let p = 0;
  while (true) {
    if (input[p] === undefined) throw new Error('Index out of range while generating output for puzzle 04.');
    sum += input[p] * 10;
    if (sum === count) break;
    p += 1;
  }
  return p;
};

export default generateOutput;
