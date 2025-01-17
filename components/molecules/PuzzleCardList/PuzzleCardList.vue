<template>
  <ul class=puzzle-card-list>
    <PuzzleCard
      v-for="(puzzleData, id) in puzzles"
      :key="puzzleData.title"
      v-bind="puzzleData"
      :id="(id + 1)?.toString().padStart(2, '0')"
      :is-solved="puzzleState[(id + 1)?.toString().padStart(2, '0')]"
    />
  </ul>
</template>

<script setup lang="ts">
import { puzzles } from '@puzzles';
import { useUserStore } from '~/stores/userStore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const puzzleState = ref<Record<string, boolean>>({});

const userStore = useUserStore();

onAuthStateChanged(getAuth(), async (user) => {
  if (!user) {
    puzzleState.value = {};
    return;
  }
  const { hashUUID } = userStore;
  const seed = hashUUID(user.uid);
  const data = await $fetch('/api/userInfo', { method: 'POST', body: { seed } });
  if (!data?.puzzles) return;
  puzzleState.value = { ...data.puzzles };
});
</script>

<style lang="scss">
@use 'assets/scss/responsive';

.puzzle-card-list {
  list-style: none;
  display: flex;
  gap: 32px;
  padding: 0;
  flex-wrap: wrap;

  @include responsive.to-breakpoint(tablet) {
    justify-content: center;
    flex-direction: column;

  }
}
</style>
