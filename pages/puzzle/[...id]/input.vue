<template>
  <div class="input-page">
    {{ input }}
  </div>
</template>

<script setup lang="ts">
import { puzzles } from '@puzzles';
import { useUserStore } from '~/stores/userStore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const route = useRoute();
const [id] = route.params.id;

useHead({ title: `Nebula - Puzzle ${id} - Input` });

const i = Number(id) - 1;

if (!puzzles[i]) throw createError({
  statusCode: 404,
  statusMessage: 'This puzzle doesn\'t exist yet or isn\'t published.',
});

const input = ref();

onAuthStateChanged(getAuth(), async (user) => {
  if (!user) {
    input.value = undefined;
    return;
  }
  const { hashUUID } = useUserStore();
  const seed = hashUUID(user.uid);
  const { data } = await useFetch('/api/input', { method: 'POST', body: { seed, id } });
  input.value = data.value?.input;
});
</script>

<style lang="scss">
.input-page {
  word-break: break-word;
}
</style>
