<template>
  <div class="text-input">
    <label :for="id" class="text-input__label">{{ label }} <span v-if="isRequired" aria-hidden="true">*</span></label>

    <input
      :type="type"
      :id="id"
      class="text-input__input"
      :aria-describedby="`${id}-error`"
      :required="isRequired"
      :placeholder="placeholder || ''"
      :aria-invalid="!isValid"
      @input="errorMessage = ''"
      v-model="text"
      ref="input"
      @keydown.enter.prevent.stop="() => emit('enter')"
    >

    <p v-if="errorMessage" :id="`${id}-error`" class="text-input__error">{{ errorMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { TextInputProps } from './TextInput.types';

const props = withDefaults(defineProps<TextInputProps>(), { type: 'text' });
const emit = defineEmits(['update:modelValue', 'enter']);

const toKebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase();
const id = `${toKebabCase(props.label)}-${useId()}`;

const text = computed({
  get() { return props.modelValue; },
  set(text) { emit('update:modelValue', text); },
});

const errorMessage = ref<string | null>(null);

const validate = () => {
  if (!props.validator) return;
  errorMessage.value = props.validator(text.value || '');
};

const isValid = computed(() => !Boolean(errorMessage.value));

const input = ref<HTMLInputElement>();
const focusInput = () => input.value?.focus();

defineExpose({ validate, isValid, focusInput });
</script>

<style lang="scss">
@use 'assets/scss/colors';

.text-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  &:not(:has(.text-input__error)) {
    margin-bottom: 36px;
  }

  &__label {
    font-weight: 100;
    transform: translateY(32px);
    pointer-events: none;
    transition: all ease-in-out 0.1s;
  }

  &:has(.text-input__input:not(:placeholder-shown)) &__label,
  &:has(.text-input__input:focus-visible) &__label {
    font-weight: 500;
    transform: translateY(0);
    pointer-events: auto;
  }

  &__input {
    all: unset;
    border-bottom: 1px solid colors.$black;
    height: 30px;
    margin-top: 0.5rem;
  }

  &__error {
    margin: 0;
    font-weight: 300;
    color: red;
    height: 20px;
  }
}
</style>
