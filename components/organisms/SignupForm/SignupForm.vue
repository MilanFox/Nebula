<template>
  <div class="signup-form">
    <h2>Sign Up</h2>
    <InputForm v-bind="formData"/>
    <p role="alert">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { formFields } from './SignupForm.data';

const error = ref<string | null>(null);

const auth = useFirebaseAuth();
const onSubmit = async () => {
  error.value = null;
  try {
    await createUserWithEmailAndPassword(auth!, formFields[0].model, formFields[1].model);
  } catch (err) { error.value = (err as Error).message; }
};

const formData = { formFields, onSubmit, submitLabel: 'Sign up' };
</script>

<style lang="scss">
.signup-form {
  /* TODO: Style */
}
</style>
