<template>
  <div :class="`grid-layout grid-layout--${layout}`">
    <slot name="left">
      <div/>
    </slot>
    <slot name="right">
      <div/>
    </slot>
  </div>
</template>

<script setup lang="ts">
import type { GridLayoutProps } from '@atoms/GridLayout/GridLayout.types';

withDefaults(defineProps<GridLayoutProps>(), { layout: '1-1' });
</script>

<style lang="scss">
@use 'assets/scss/responsive';

.grid-layout {
  display: grid;
  gap: 16px;

  @include responsive.from-breakpoint(tablet) {
    &--1-1 {
      grid-template-columns: 1fr 1fr;
    }

    &--1-2 {
      grid-template-columns: 1fr 2fr;
    }

    &--2-1 {
      grid-template-columns: 2fr 1fr;
    }
  }
}
</style>
