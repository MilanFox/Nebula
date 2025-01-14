<template>
  <section class="content-section">
    <h2 v-if="title" class="content-section__title">{{ title }}</h2>
    <slot/>
  </section>
</template>

<script setup lang="ts">
import type { ContentSectionProps } from '@atoms/ContentSection/ContentSection.types';

defineProps<ContentSectionProps>();
</script>

<style lang="scss">
.content-section {
  padding-top: 16px;

  &__title {
    font-size: 32px;
    margin: 0 0 16px;
  }
}
</style>
