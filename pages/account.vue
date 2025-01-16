<template>
  <hr aria-hidden="true">
  <ContentSection title="Your Account">
    {{ user }}
  </ContentSection>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/userStore';

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

useHead({ title: 'Nebula - Your Account' });
</script>
