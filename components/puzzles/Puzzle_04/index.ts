import generateInput from './puzzle.input';
import generateOutput from './puzzle.output';

const getData = (seed: number) => {
  const input = generateInput(seed);
  const output = generateOutput(input);
  return { input: JSON.stringify(input), output, title };
};

const title = 'Floating Toll Points';

export default { getData, title };
