<template>
  <div class="password-reset-form">
    <h2>Reset Password</h2>
    <InputForm v-bind="formData"/>
    <p role="alert">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { sendPasswordResetEmail } from 'firebase/auth';
import { formFields } from './PasswordResetForm.data';

const error = ref<string | null>(null);

const auth = useFirebaseAuth();
const onSubmit = async () => {
  error.value = null;
  try {
    await sendPasswordResetEmail(auth!, formFields[0].model);
    formFields[0].model = '';
  } catch (err) { error.value = (err as Error).message; }
};

const formData = { formFields, onSubmit, submitLabel: 'Send Reset Instructions' };
</script>

<style lang="scss">
.password-reset-form {
  /* TODO: Style */
}
</style>
