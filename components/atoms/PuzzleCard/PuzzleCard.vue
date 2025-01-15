<template>
  <li class=puzzle-card>
    <NuxtLink :to="`/puzzle/${id}`" class="puzzle-card__content">
      <div class="puzzle-card__id">[Puzzle {{ id }}]</div>
      <div class="puzzle-card__title">{{ title }}</div>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { PuzzleCardProps } from './PuzzleCard.types';

defineProps<PuzzleCardProps>();
</script>

<style lang="scss">
@use 'assets/scss/colors';

.puzzle-card {
  filter: drop-shadow(3px 3px rgba(colors.$black, 1));
  transition: transform ease-in-out 0.15s;

  &:hover, &:focus-within {
    transform: scale(1.02);
    filter: drop-shadow(3px 3px rgba(colors.$blue, 1));
  }

  &__content {
    display: block;
    width: 200px;
    min-height: 300px;
    position: relative;
    padding: 16px 16px 32px;
    background: #ebebef;

    $edge: 20px;
    clip-path: polygon(
        $edge 0,
        100% 0,
        100% calc(100% - $edge),
        calc(50% + $edge) calc(100% - $edge),
        50% 100%,
        0% 100%,
        0 $edge
    );

    &:hover {
      color: inherit;
      text-decoration: inherit;
    }

    &:before {
      content: '';
      background: repeating-linear-gradient(
          to right,
          black 0%, black 8%,
          transparent 8%, transparent 14%,
          black 14%, black 25%,
          transparent 25%, transparent 35%,
          black 35%, black 50%,
          transparent 50%, transparent 60%,
          black 60%, black 72%,
          transparent 72%, transparent 89%,
          black 89%, black 100%,
      );
      background-size: 10% 100%;
      width: calc(100% - 16px);
      height: 50px;
      left: 8px;
      bottom: 64px;
      position: absolute;
    }
  }

  &__id {
    position: absolute;
    left: 12px;
    bottom: 4px;
    font-weight: 300;
  }
}

</style>
