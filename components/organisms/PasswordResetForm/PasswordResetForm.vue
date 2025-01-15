<template>
  <hr aria-hidden="true">
  <div class="password-reset-form">
    <InputForm v-bind="formData"/>
    <p role="alert">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { sendPasswordResetEmail } from 'firebase/auth';
import { formFields } from './PasswordResetForm.data';

const error = ref<string | null>(null);
const isBusy = ref(false);

const auth = useFirebaseAuth();
const onSubmit = async () => {
  if (isBusy.value) return;
  isBusy.value = true;
  error.value = null;
  try {
    await sendPasswordResetEmail(auth!, formFields[0].model);
    formFields[0].model = '';
  } catch (err) { error.value = (err as Error).message; }
  isBusy.value = false;
  await useRouter().push('/');
};

const formData = { formFields, onSubmit, submitLabel: 'Send Reset Instructions' };
</script>
