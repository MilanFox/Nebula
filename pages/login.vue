<template>
  <div>
    <SignupForm/>
    <hr>
    <LoginForm/>
    <hr>
    <PasswordResetForm/>
  </div>
</template>

<script setup lang="ts">
const user = await getCurrentUser();
</script>
