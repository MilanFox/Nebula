<template>
  <button class="text-button" :class="{ 'text-button--busy': isBusy }" :aria-disabled="isBusy">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import type { TextButtonProps } from '@atoms/TextButton/TextButton.types';

defineProps<TextButtonProps>();
</script>

<style lang="scss">
@use 'assets/scss/colors';

.text-button {
  all: unset;
  cursor: pointer;
  padding: 16px;
  display: inline-flex;
  justify-content: center;
  border: 1px solid colors.$black;
  background: colors.$black;
  color: colors.$white;

  &:hover {
    color: colors.$white;
    text-decoration: none;
  }

  &--busy {
    color: transparent;
    pointer-events: none;

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    &::after {
      content: '';
      width: 16px;
      height: 16px;
      border: 2px solid colors.$white;
      border-top: 2px solid transparent;
      border-radius: 50%;
      position: absolute;
      animation: spin 1s linear infinite;
    }
  }

  &:active {
    background: colors.$blue;
    border-color: colors.$blue;
  }
}
</style>
