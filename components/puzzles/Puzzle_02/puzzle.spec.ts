import { describe, it, expect } from 'vitest';
import generateOutput from './puzzle.output';
import generateInput from './puzzle.input';

describe('Puzzle 01', () => {
  it('should return the correct output for example 01', () => {
    const input = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 0]];
    expect(generateOutput(input)).toBe(5);
  });

  it('should return the correct output for example 02', () => {
    const input = [[1, 2], [1, 2], [1, 2], [1, 2], [1, 2]];
    expect(generateOutput(input)).toBe(1);
  });

  it('should return the correct output for example 03', () => {
    const input = [[1, 2], [2, 1], [5, 6], [6, 5], [6, 5]];
    expect(generateOutput(input)).toBe(4);
  });

  const input = generateInput(123456789);

  it('should match the input snapshot', () => {
    expect(input).toMatchSnapshot();
  });

  it('should match the output snapshot', () => {
    expect(generateOutput(input)).toMatchSnapshot();
  });
});
