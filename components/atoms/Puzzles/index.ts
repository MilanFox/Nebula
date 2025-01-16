import puzzle_01 from './Puzzle_01';
import puzzle_02 from './Puzzle_02';
import puzzle_03 from './Puzzle_03';
import puzzle_04 from './Puzzle_04';

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


