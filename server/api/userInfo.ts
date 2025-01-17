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

  return await getUserInfo(seed);
});
