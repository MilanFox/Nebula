import { getData } from '@puzzles/puzzles';

export default defineEventHandler(async (event) => {
  const { seed, id } = await readBody(event);
  if (!seed || !id) return;
  return getData(seed, id);
});
