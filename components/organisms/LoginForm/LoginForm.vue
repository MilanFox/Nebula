<template>
  <div class="login-form">
    <h2>Log In</h2>
    <InputForm v-bind="formData"/>
    <p role="alert">{{ error }}</p>

    <TextButton @click="handleSignInAnonymously">Log in Anonymously</TextButton>
  </div>
</template>

<script setup lang="ts">
import { signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';
import { formFields } from './LoginForm.data';

const error = ref<string | null>(null);

const auth = useFirebaseAuth();
const onSubmit = async () => {
  error.value = null;
  try {
    await signInWithEmailAndPassword(auth!, formFields[0].model, formFields[1].model);
  } catch (err) { error.value = (err as Error).message; }
};

const handleSignInAnonymously = async () => { await signInAnonymously(auth!); };

const formData = { formFields, onSubmit, submitLabel: 'Log In' };
</script>

<style lang="scss">
.login-form {
  /* TODO: Style */
}
</style>
