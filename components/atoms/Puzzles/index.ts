import puzzle_01 from '@atoms/Puzzles/Puzzle_01';
import puzzle_02 from '@atoms/Puzzles/Puzzle_02';
import puzzle_03 from '@atoms/Puzzles/Puzzle_03';
import puzzle_04 from '@atoms/Puzzles/Puzzle_04';

export const puzzles = [puzzle_01, puzzle_02, puzzle_03, puzzle_04];

export const getInput = (seed: number, puzzle: string) => {
  const i = Number(puzzle);
  if (!puzzles[i]) throw createError(`Failed to access input for Puzzle ${i} / Seed ${seed}`);
  return puzzles[i].getData(seed).input;
};

export const getOutput = (seed: number, puzzle: string) => {
  const i = Number(puzzle);
  if (!puzzles[i]) throw createError(`Failed to access output for Puzzle ${i} / Seed ${seed}`);
  return puzzles[i].getData(seed).output;
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


