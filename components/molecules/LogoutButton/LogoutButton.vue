<template>
  <TextButton @click="handleSignOut">Log Out</TextButton>
</template>

<script setup lang="ts">
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();
const handleSignOut = async () => { await signOut(auth); };
</script>
