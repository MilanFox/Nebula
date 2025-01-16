import generateInput from './puzzle.input';
import generateOutput from './puzzle.output';
import description from './puzzle.description.vue';

const getData = (seed: number) => {
  const input = generateInput(seed);
  const output = generateOutput(input);
  return { input: JSON.stringify(input), output, title };
};

const title = 'The side effects of space travel';

export default { getData, title, description };
