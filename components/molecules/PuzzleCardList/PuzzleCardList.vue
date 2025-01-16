<template>
  <ul class=puzzle-card-list>
    <PuzzleCard
      v-for="(puzzleData, id) in puzzles"
      :key="puzzleData.title"
      v-bind="puzzleData"
      :id="(id + 1).toString().padStart(2, '0')"
    />
  </ul>
</template>

<script setup lang="ts">
import { puzzles } from '@atoms/Puzzles';
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
