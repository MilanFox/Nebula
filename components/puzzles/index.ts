import puzzleData from './puzzles';

import Puzzle_01 from './Puzzle_01/puzzle.description.vue';
import Puzzle_02 from './Puzzle_02/puzzle.description.vue';
import Puzzle_03 from './Puzzle_03/puzzle.description.vue';
import Puzzle_04 from './Puzzle_04/puzzle.description.vue';

const components = [Puzzle_01, Puzzle_02, Puzzle_03, Puzzle_04];

export const puzzles = puzzleData.map((data, i) => ({ ...data, description: components[i] }));
