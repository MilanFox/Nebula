import { PseudoRandomNumberGenerator } from '../helpers';
import { count } from './puzzle.const';

const generateInput = (seed: number) => {
  const pseudoRandomGenerator = new PseudoRandomNumberGenerator(seed);
  const tollStations = [];
  let sum = 0;

  while (sum < 500) {
    const num = Math.floor(((((pseudoRandomGenerator.nextNumber() * 99931) % 761)) % 10) / 2);
    tollStations.push(num / 10);
    sum += num;
  }

  if (sum !== 500) {
    const delta = sum - 500;
    tollStations[tollStations.length - 1] = ((tollStations.at(-1)! * 10) - delta) / 10;
  }

  while (tollStations.length < count) tollStations.push(...tollStations);
  tollStations.length = count;

  return tollStations;
};

export default generateInput;

