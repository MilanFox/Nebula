import type generateInput from './puzzle.input';

const generateOutput = (input: ReturnType<typeof generateInput>) => new Set(input.map(pair => pair.toString())).size;

export default generateOutput;
