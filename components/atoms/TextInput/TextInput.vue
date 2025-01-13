<template>
  <div class="text-input">
    <label :for="id">{{ label }} <span v-if="isRequired" aria-hidden="true">*</span></label>

    <input
      :type="type"
      :id="id"
      :aria-describedby="`${id}-error`"
      :required="isRequired"
      :placeholder="placeholder"
      :aria-invalid="!isValid"
      @input="errorMessage = ''"
      v-model="text"
      ref="input"
      @keydown.enter.prevent.stop="() => emit('enter')"
    >

    <p v-if="errorMessage" :id="`${id}-error`">{{ errorMessage }}</p>
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
.text-input {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
}

input {
  margin-top: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
