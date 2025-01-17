<template>
  <li class="puzzle-card">
    <NuxtLink :to="`/puzzle/${id}`" class="puzzle-card__content">
      <div class="puzzle-card__id">[Puzzle {{ id }}]</div>
      <div class="puzzle-card__title">{{ title }}</div>
      <img src="/assets/images/check.svg" alt="(solved)" class="puzzle-card__check" v-if="isSolved">
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import type { PuzzleCardProps } from './PuzzleCard.types';

defineProps<PuzzleCardProps>();
</script>

<style lang="scss">
@use 'assets/scss/colors';
@use 'assets/scss/responsive';

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
    text-decoration: none;

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

    @include responsive.to-breakpoint(tablet) {
      width: 100%;
      min-height: 150px;
    }

    &:hover {
      color: inherit;
      text-decoration: inherit;
    }

    &:before {
      content: '';
      background: repeating-linear-gradient(
          to right,
          colors.$black 0%, colors.$black 8%,
          transparent 8%, transparent 14%,
          colors.$black 14%, colors.$black 25%,
          transparent 25%, transparent 35%,
          colors.$black 35%, colors.$black 50%,
          transparent 50%, transparent 60%,
          colors.$black 60%, colors.$black 72%,
          transparent 72%, transparent 89%,
          colors.$black 89%, colors.$black 100%,
      );
      background-size: 20px 100%;
      width: calc(100% - 16px);
      height: 50px;
      left: 8px;
      bottom: 64px;
      position: absolute;

      @include responsive.to-breakpoint(tablet) {
        height: 30px;
        width: calc(100% - 32px);
        left: 16px;
        bottom: 32px;
      }
    }
  }

  &__id {
    position: absolute;
    left: 12px;
    bottom: 4px;
    font-weight: 300;

    @include responsive.to-breakpoint(tablet) {
      font-size: 16px;
      left: 16px;
      bottom: 8px;
    }
  }

  &__check {
    position: absolute;
    top: -25px;
    right: -75px;
    opacity: 50%;
    z-index: -1;
    width: 200px;
    aspect-ratio: 1;
  }
}
</style>
