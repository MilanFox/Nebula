<template>
  <ul class=puzzle-card-list>
    <PuzzleCard v-for="puzzleData in existingPuzzles" :key="puzzleData.id" v-bind="puzzleData"/>
  </ul>
</template>

<script setup lang="ts">
import { existingPuzzles } from '~/lib/puzzles';
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
