import { PseudoRandomNumberGenerator } from '../helpers';

const generateInput = (seed: number): Number[][] => {
  const pseudoRandomGenerator = new PseudoRandomNumberGenerator(seed);

  const generateUniquePairs = (count: number) => {
    const set = new Set<string>();
    while (set.size < count) {
      const pair = [pseudoRandomGenerator.nextNumber(), pseudoRandomGenerator.nextNumber()];
      set.add(pair.join(','));
    }
    return Array.from(set).map((s) => s.split(',').map(Number));
  };

  const shuffle = <T>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = pseudoRandomGenerator.nextNumber() % (i + 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const uniqueCount = 600 + (seed = (seed * 9301 + 49297) % 200);
  const uniquePairs = generateUniquePairs(uniqueCount);
  const filledPairs = [...uniquePairs];

  while (filledPairs.length < 1000) filledPairs.push(uniquePairs[(seed = (seed * 9301 + 49297) % uniqueCount)]);

  return shuffle(filledPairs);
};

export default generateInput;
