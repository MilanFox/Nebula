import { getData } from '@puzzles/puzzles';

interface RequestBody {
  seed: number;
  id: string;
  answer: number;
}

export default defineEventHandler(async (event) => {
  const { seed, id, answer } = await readBody<RequestBody>(event);

  if (!seed || !id || !answer) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields: seed, id, or answer',
    });
  }

  const cachedGetData = cachedFunction(
    ({ seed, id }) => {
      const { output } = getData(seed, id);
      return { output };
    },
    {
      getKey: ({ seed, id }) => `puzzle-output-${seed}-${id}`,
      maxAge: 60 * 60,
    },
  );

  const data = await cachedGetData({ seed, id });

  if (!data) throw createError({
    statusCode: 500,
    statusMessage: `Failed to get output data for Seed ${seed} | Puzzle ${id}`,
  });

  const { output } = data;
  const isValid = output === answer;

  return { isValid };
});
