<template>
  <div class="puzzle-page">
    <h1>[{{ id }}] {{ title }}</h1>
    <component :is="description"/>
  </div>
</template>

<script setup lang="ts">
import { puzzles } from '@atoms/Puzzles';

const route = useRoute();
const [id] = route.params.id;

useHead({ title: `Nebula - Puzzle ${id}` });

const i = Number(id) - 1;

if (!puzzles[i]) throw createError({
  statusCode: 404,
  statusMessage: 'This puzzle doesn\'t exist yet or isn\'t published.',
});

const { title, description } = puzzles[i];
</script>
