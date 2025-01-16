<template>
  <hr aria-hidden="true">
  <ContentSection title="Your Account">
    <ul>
      <li>UID: {{ user?.uid }}</li>
      <li>Puzzle-Seed: {{ seed }}</li>
      <li>Email: {{ user?.isAnonymous ? 'Anonymous' : user?.email }}</li>
    </ul>
  </ContentSection>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/userStore';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

useHead({ title: 'Nebula - Your Account' });

const hashUUID = (input: string) => {
  return input
    .split('')
    .map(char => char.charCodeAt(0))
    .reduce((hash, code) => (hash * 31 + code) >>> 0, 0);
};

const seed = computed(() => user?.value ? hashUUID(user.value.uid) : undefined);
</script>
