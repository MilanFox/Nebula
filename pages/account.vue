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
const { user, seed } = storeToRefs(userStore);

useHead({ title: 'Nebula - Your Account' });
</script>
