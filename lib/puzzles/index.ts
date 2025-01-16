import puzzle_01 from './puzzle_01';
import puzzle_02 from './puzzle_02';
import puzzle_03 from './puzzle_03';
import puzzle_04 from './puzzle_04';

const puzzleData = [puzzle_01, puzzle_02, puzzle_03, puzzle_04];

export const existingPuzzles = puzzleData.map(({ title }, i) => ({ title, id: (i + 1).toString().padStart(2, '0') }));

export const getInput = (seed: number, puzzle: string) => {
  const i = Number(puzzle);
  if (!puzzleData[i]) throw createError(`Failed to access input for Puzzle ${i} / Seed ${seed}`);
  return puzzleData[i].getData(seed).input;
};

export const getOutput = (seed: number, puzzle: string) => {
  const i = Number(puzzle);
  if (!puzzleData[i]) throw createError(`Failed to access output for Puzzle ${i} / Seed ${seed}`);
  return puzzleData[i].getData(seed).output;
};

function* generatePseudoRandomNumber(seed: number) {
  let currentSeed = seed;
  while (true) {
    currentSeed = (currentSeed * 9301 + 49297) % 233280;
    yield currentSeed;
  }
}

export class PseudoRandomNumberGenerator {
  private generator: Generator<number, void, unknown>;

  constructor(seed: number) {
    this.generator = generatePseudoRandomNumber(seed);
  }

  nextNumber() {
    const { value, done } = this.generator.next();
    if (done || typeof value !== 'number') throw new Error('Generator has finished unexpectedly or produced undefined.');
    return value;
  }
}


