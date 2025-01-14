<template>
  <div class="header-bar">
    <NuxtLink to="/"><img src="assets/images/logo.svg" alt="Home" class="header-bar__logo"></NuxtLink>
    <nav class="header-bar__nav">
      <MainNav/>
      <AuthButton/>
    </nav>
  </div>
</template>

<style lang="scss">
.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;

  &__logo {
    width: 200px;
  }

  &__nav {
    display: flex;
    gap: 128px;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
import MainNav from '@molecules/MainNav/MainNav.vue';
</script>
