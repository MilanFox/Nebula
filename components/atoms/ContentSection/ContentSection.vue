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
  margin: 64px 0;

  &__title {
    font-size: 32px;
    margin: 0 0 16px;
  }
}
</style>
