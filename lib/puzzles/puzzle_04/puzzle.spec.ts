import { describe, it, expect } from 'vitest';
import generateOutput from './puzzle.output.js';

describe('Puzzle 04', () => {
  it('should return the correct output for example 01', () => {
    const input = [0, 2, 5, 2.5, 1, 0, 5.5, 4, 5, 0, 2, 5, 2.5, 1, 0, 5.5, 4, 5, 0, 2, 5, 2.5, 1, 0, 5.5, 4, 5];
    expect(generateOutput(input)).toBe(17);
  });

  it('should return the correct output for example 02', () => {
    const input = Array(500).fill(0.1);
    expect(generateOutput(input)).toBe(499);
  });

  it('should return the correct output for example 03', () => {
    const input = Array(500).fill(0.2);
    expect(generateOutput(input)).toBe(249);
  });
});
