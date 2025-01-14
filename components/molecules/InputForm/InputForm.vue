<template>
  <div class="input-form">
    <TextInput
      v-for="input in formFields"
      :key="input.data.label"
      v-bind="input.data"
      v-model="input.model"
      ref="inputs"
      @enter="handleSubmit"
    />
    <TextButton @click="handleSubmit">{{ submitLabel }}</TextButton>
  </div>
</template>

<script setup lang="ts">
import type { TextInputInstance } from '@atoms/TextInput/TextInput.types';
import type { InputFormProps } from './InputForm.types';

const props = withDefaults(defineProps<InputFormProps>(), { submitLabel: 'Submit' });

const inputs = ref<TextInputInstance[]>();

const validateAll = () => {
  inputs.value?.forEach(input => input.validate());
  return inputs.value?.every(inputField => inputField.isValid);
};

const handleSubmit = () => {
  const isValid = validateAll();
  if (isValid) props.onSubmit();
};
</script>

<style lang="scss">
.input-form {
  /* TODO: Style */
}
</style>
