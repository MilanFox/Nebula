<template>
  <div class="login-form">
    <ContentSection title="Log in with an Account">

      <InputForm v-bind="formData" :is-busy="isBusy"/>

      <p>No Account yet?
        <NuxtLink to="/signup">Click here to Sign Up</NuxtLink>
      </p>

      <p>Forgot your Password?
        <NuxtLink to="/forgot-password">Click here to request a reset.</NuxtLink>
      </p>

      <p role="alert" class="login-form__error">{{ error }}</p>
    </ContentSection>

    <hr aria-hidden="true">

    <ContentSection title="Log in Anonymously">
      <p>It is not necessary to create an account to play.</p>
      <p>You can log in Anonymously, but careful: The inputs and achievements are specific to each account, so logging
        out of an anonymous account or changing devices will make you lose your progress.</p>
      <TextButton @click="handleSignInAnonymously" :is-busy="isBusy">Log in Anonymously</TextButton>
    </ContentSection>

    <hr aria-hidden="true">
  </div>
</template>

<script setup lang="ts">
import { signInWithEmailAndPassword, signInAnonymously } from 'firebase/auth';
import { formFields } from './LoginForm.data';

const error = ref<string | null>(null);
const isBusy = ref(false);

const route = useRoute();
const redirect = atob(typeof route.query.redirect === 'string' ? route.query.redirect : btoa('/'));

const auth = useFirebaseAuth();
const onSubmit = async () => {
  if (isBusy.value) return;
  isBusy.value = true;
  error.value = null;
  try {
    await signInWithEmailAndPassword(auth!, formFields[0].model, formFields[1].model);
  } catch (err) { error.value = (err as Error).message; }
  isBusy.value = false;
  await useRouter().push('/');
};

const handleSignInAnonymously = async () => {
  if (isBusy.value) return;
  isBusy.value = true;
  await signInAnonymously(auth!);
  isBusy.value = false;
  await navigateTo(redirect);
};

const formData = { formFields, onSubmit, submitLabel: 'Log In' };
</script>

<style lang="scss">
.login-form {
  &__error {
    color: red;
    height: 0;

    &:not(:empty) {
      border: 1px solid red;
      padding: 16px;
      height: auto;
    }
  }
}
</style>
