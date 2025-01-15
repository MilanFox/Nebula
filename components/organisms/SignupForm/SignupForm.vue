<template>
  <div class="signup-form">
    <hr aria-hidden="true">

    <ContentSection title="Sign up">
      <InputForm v-bind="formData" :is-busy="isBusy"/>
      <p role="alert" class="signup-form__error">{{ error }}</p>
    </ContentSection>
  </div>
</template>

<script setup lang="ts">
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { formFields } from './SignupForm.data';

const error = ref<string | null>(null);
const isBusy = ref(false);

const auth = useFirebaseAuth();
const onSubmit = async () => {
  if (isBusy.value) return;
  error.value = null;
  isBusy.value = true;
  try {
    await createUserWithEmailAndPassword(auth!, formFields[0].model, formFields[1].model);
  } catch (err) { error.value = (err as Error).message; }
  isBusy.value = false;
  await useRouter().push('/');
};

const formData = { formFields, onSubmit, submitLabel: 'Sign up' };
</script>

<style lang="scss">
.signup-form {
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
