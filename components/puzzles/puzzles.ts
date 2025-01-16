import puzzle_01 from './Puzzle_01';
import puzzle_02 from './Puzzle_02';
import puzzle_03 from './Puzzle_03';
import puzzle_04 from './Puzzle_04';

const puzzles = [puzzle_01, puzzle_02, puzzle_03, puzzle_04];

export const getData = (seed: number, id: string) => {
  const i = Number(id) - 1;
  if (Number.isNaN(i) || !puzzles[i]) throw createError(`Failed to get data for Seed ${seed} / Puzzle ${id}`);
  return puzzles[i].getData(seed);
};

export default puzzles;
