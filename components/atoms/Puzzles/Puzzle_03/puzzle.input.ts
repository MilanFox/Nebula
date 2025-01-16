import { count } from './puzzle.const.js';
import { PseudoRandomNumberGenerator } from '../helpers';

const generateInput = (seed: number) => {
  const pseudoRandomGenerator = new PseudoRandomNumberGenerator(seed);

  const getCrewMember = () => ({
    motivation: 1 + (pseudoRandomGenerator.nextNumber() % 100),
    workload: (1 + (pseudoRandomGenerator.nextNumber() % 10)),
  });
  return Array.from({ length: count }, () => getCrewMember());
};

export default generateInput;
