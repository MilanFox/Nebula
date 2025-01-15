<template>
  <div class=accordion-item :class="{'accordion-item--expanded': isExpanded}">
    <h3 class="accordion-item__headline">
      <button
        :aria-expanded="isExpanded"
        type="button"
        :aria-controls="id"
        @click="toggleAccordion"
        class="accordion-item__button"
      >
        {{ title }}
      </button>
    </h3>
    <div :id="id" class="accordion-item__content" :aria-hidden="!isExpanded">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AccordionItemProps } from './AccordionItem.types';

const props = defineProps<AccordionItemProps>();

const toKebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
const id = `accordion-${toKebabCase(props.title)}`;

const isExpanded = ref(false);
const toggleAccordion = () => isExpanded.value = !isExpanded.value;
</script>

<style lang="scss">
@use 'assets/scss/colors';

.accordion-item {
  display: grid;
  grid-template-rows: min-content 0fr;
  transition: grid-template-rows ease-in-out 0.3s;

  &__headline {
    margin: 0;
    display: flex;
  }

  &__button {
    all: unset;
    cursor: pointer;
    position: relative;
    padding: 4px 40px 4px 0;
    flex-grow: 1;
    align-items: flex-start;

    &::after {
      content: '';
      position: absolute;
      right: 16px;
      transform: rotateZ(405deg);
      transform-origin: 11px 11px;
      transition: transform ease-in-out 0.3s;
      display: inline-block;
      width: 16px;
      height: 16px;
      border-bottom: 4px solid colors.$blue;
      border-right: 4px solid colors.$blue;
    }

    &:hover {
      color: colors.$blue;
    }
  }

  &__content {
    overflow: hidden;
  }

  &--expanded {
    grid-template-rows: min-content 1fr;

    .accordion-item__button::after {
      transform: rotateZ(225deg);
    }
  }

  & + .accordion-item {
    border-top: 1px solid colors.$grey;
  }
}
</style>
