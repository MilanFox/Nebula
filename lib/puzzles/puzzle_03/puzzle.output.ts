import type generateInput from './puzzle.input';

const generateOutput = (input: ReturnType<typeof generateInput>) => {
  const scenarioA = input.reduce((acc, cur) => acc + Number((cur.motivation - (cur.workload * 10)) > 0), 0);
  const scenarioB = input.reduce((acc, cur) => acc + Number(((cur.motivation + 10) - (cur.workload * 15)) > 0), 0);
  return Math.max(scenarioA, scenarioB);
};

export default generateOutput;
