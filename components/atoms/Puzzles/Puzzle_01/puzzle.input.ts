import { count } from './puzzle.const';
import { PseudoRandomNumberGenerator } from '@atoms/Puzzles';

const generateInput = (seed: number) => {
  const pseudoRandomGenerator = new PseudoRandomNumberGenerator(seed);
  return Array.from({ length: count }, () => (pseudoRandomGenerator.nextNumber() * 123456789) % 1_000_000);
};

export default generateInput;
