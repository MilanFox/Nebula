<template>
  <div class="result-page">
    <template v-if="isValid">
      <h1>Correct!</h1>
      <p>Hey Congrats - This is the <em>right answer!</em></p>
      <p>You can now
        <NuxtLink to="/">go back</NuxtLink>
        to the main page and try to solve the other puzzles
      </p>
    </template>
    <template v-else>
      <h1>Try again!</h1>
      <p>Unfortunately this is <em>not</em> the correct answer.</p>
      <p>
        <NuxtLink :to="route.path.split('/').slice(0, -1).join('/')">Go back</NuxtLink>
        to the puzzle page and try again - I'm sure next time will work!
      </p>
    </template>
  </div>
</template>

<script setup lang="ts">
import { puzzles } from '@puzzles';

const route = useRoute();
const [id] = route.params.id;

const i = Number(id) - 1;
if (!puzzles[i]) throw createError({ statusCode: 404, statusMessage: 'This puzzle doesn\'t exist yet.' });

useHead({ title: `Nebula - Puzzle ${id} - Result` });

const isValid = route.query.valid === 'true';
</script>

<style lang="scss">
@use 'assets/scss/colors';

.result-page {
  em {
    color: colors.$blue;
    font-weight: bold;

  }
}
</style>
