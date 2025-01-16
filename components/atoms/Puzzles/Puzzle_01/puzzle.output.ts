import type generateInput from './puzzle.input';

const generateOutput = (input: ReturnType<typeof generateInput>) => input.toSorted((a, b) => a - b).at(Math.floor(input.length / 2))!;

export default generateOutput;
