import { describe, it, expect } from 'vitest';
import generateOutput from './puzzle.output.js';

describe('Puzzle 03', () => {
  it('should return the correct output for example 01', () => {
    const input = [{ motivation: 50, workload: 5 }];
    expect(generateOutput(input)).toBe(0);
  });

  it('should return the correct output for example 02', () => {
    const input = [{ motivation: 55, workload: 4 }];
    expect(generateOutput(input)).toBe(1); // A & B
  });

  it('should return the correct output for example 03', () => {
    const input = [{ motivation: 92, workload: 9 }];
    expect(generateOutput(input)).toBe(1); // A
  });

  it('should return the correct output for example 04', () => {
    const input = [{ motivation: 10, workload: 1 }];
    expect(generateOutput(input)).toBe(1); // B
  });

  it('should return the correct output for example 05', () => {
    const input = [
      { motivation: 55, workload: 10 },
      { motivation: 55, workload: 4 },
      { motivation: 92, workload: 9 },
      { motivation: 10, workload: 1 },
    ];
    expect(generateOutput(input)).toBe(2);
  });
});
