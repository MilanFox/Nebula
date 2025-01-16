<template>
  <div class="puzzle-page">
    {{ puzzle }}
  </div>
</template>

<script setup lang="ts">
import { publishedPuzzles } from '~/lib/puzzles/puzzles.const';

const route = useRoute();
const [id] = route.params.id;

useHead({ title: `Nebula - Puzzle ${id}` });

if (!publishedPuzzles.some(puzzle => puzzle.id === id)) throw createError({
  statusCode: 404,
  statusMessage: 'This puzzle doesn\'t exist yet or isn\'t published.',
});

const puzzle = publishedPuzzles.find(puzzle => puzzle.id === id);
</script>
