import { getUserInfo } from '@server/lib/firebase';

interface RequestBody {seed: number;}

export default defineEventHandler(async (event) => {
  const { seed } = await readBody<RequestBody>(event);

  if (!seed) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required field: seed',
    });
  }

  const cachedGetData = cachedFunction(
    async ({ seed }) => {
      const data = getUserInfo(seed);
      return data;
    },
    {
      getKey: ({ seed }) => `user-data-${seed}`,
      maxAge: 60 * 60,
    },
  );

  return await cachedGetData({ seed });
});
