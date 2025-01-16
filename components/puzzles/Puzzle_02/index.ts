import generateInput from './puzzle.input';
import generateOutput from './puzzle.output';

const getData = (seed: number) => {
  const input = generateInput(seed);
  const output = generateOutput(input);
  return { input: JSON.stringify(input), output };
};

const title = 'Okay, copy that!';

export default { getData, title };
