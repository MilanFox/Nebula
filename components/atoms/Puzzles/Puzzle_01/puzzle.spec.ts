import { describe, it, expect } from 'vitest';
import generateOutput from './puzzle.output.js';

describe('Puzzle 01', () => {
  it('should return the correct output for example 01', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(generateOutput(input)).toBe(5);
  });

  it('should return the correct output for example 02', () => {
    const input = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(generateOutput(input)).toBe(0);
  });

  it('should return the correct output for example 03', () => {
    const input = [0, 4, 2, 8, 7, 6, 3, 5, 9];
    expect(generateOutput(input)).toBe(5);
  });

  it('should return the correct output for example 04', () => {
    const input = [0, 10, 2, 83, 7, 61, 4, 35, 9];
    expect(generateOutput(input)).toBe(9);
  });
});
