<template>
  <ul class=puzzle-card-list>
    <PuzzleCard v-for="puzzleData in publishedPuzzles" :key="puzzleData.id" v-bind="puzzleData"/>
  </ul>
</template>

<script setup lang="ts">
import { publishedPuzzles } from '~/lib/puzzles/puzzles.const';
</script>

<style lang="scss">
.puzzle-card-list {
  list-style: none;
  display: flex;
  gap: 32px;
  padding: 0;
  flex-wrap: wrap;
}
</style>
