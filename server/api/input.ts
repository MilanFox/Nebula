import { getData } from '@puzzles/puzzles';

interface RequestBody {
  seed: number;
  id: string;
}

export default defineEventHandler(async (event) => {
  const { seed, id } = await readBody<RequestBody>(event);
  if (!seed || !id) return;

  const cachedGetData = cachedFunction(
    ({ seed, id }) => {
      const { input } = getData(seed, id);
      return { input };
    },
    {
      getKey: ({ seed, id }) => `puzzle-input-${seed}-${id}`,
      maxAge: 60 * 60,
    },
  );

  return await cachedGetData({ seed, id });
});
