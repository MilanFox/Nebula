<template>
  <div class="puzzle-page">
    <h1>[{{ id }}] {{ title }}</h1>

    <component :is="description" class="puzzle-page__description"/>

    <template v-if="input && output">
      <ContentSection title="Your Input">
        <TextButton @click="handleGetInput">Copy to Clipboard</TextButton>
        Or
        <NuxtLink :to="`${route.path}/input`">Click here to see the input</NuxtLink>
      </ContentSection>

      <ContentSection title="Your Answer">
        <div class="puzzle-page__answer">
          <TextInput
            :validator="answerValidator"
            :is-required="true"
            label="Your Answer"
            class="puzzle-page__answer-input"
            @enter="handleSubmit"
            ref="outputField"
            v-model="answer"
          />
          <TextButton @click="handleSubmit">Submit Answer</TextButton>
        </div>
      </ContentSection>
    </template>

  </div>
</template>

<script setup lang="ts">
import { puzzles } from '@puzzles';
import { useUserStore } from '~/stores/userStore';
import type { TextInputInstance } from '@atoms/TextInput/TextInput.types';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const route = useRoute();
const [id] = route.params.id;

const i = Number(id) - 1;
if (!puzzles[i]) throw createError({ statusCode: 404, statusMessage: 'This puzzle doesn\'t exist yet.' });
const { title, description } = puzzles[i];

useHead({ title: `Nebula - Puzzle ${id}` });

const input = ref();
const output = ref();

onAuthStateChanged(getAuth(), async (user) => {
  if (!user) {
    input.value = undefined;
    output.value = undefined;
    return;
  }
  const { hashUUID } = useUserStore();
  const seed = hashUUID(user.uid);
  const { data } = await useFetch('/api/puzzle', { method: 'POST', body: { seed, id } });
  input.value = data.value?.input;
  output.value = data.value?.output;
});

const handleGetInput = () => {
  navigator.clipboard.writeText(input.value);
};

const answerValidator = (value: string) => {
  if (!value) return 'Please input your Answer';
  const output = Number(value);
  if (Number.isNaN(output)) return 'Your answer is supposed to be a number';
  return null;
};

const outputField = ref<TextInputInstance>();
const answer = ref('');

const handleSubmit = () => {
  if (!outputField.value) return;
  outputField.value.validate();
  if (!outputField.value.isValid) return;
  console.log('Your Answer was', Number(answer.value) === output.value); /* TODO */
};
</script>

<style lang="scss">
@use 'assets/scss/responsive';
@use 'assets/scss/colors';

.puzzle-page {
  &__description {
    @include responsive.to-breakpoint(tablet) {
      line-height: 175%;
    }

    em {
      color: colors.$blue;
      font-weight: 700;
      font-style: normal;
    }
  }

  &__answer {
    display: flex;
    gap: 64px;
    align-items: center;

    &-input {
      flex-grow: 1;
    }
  }
}
</style>
