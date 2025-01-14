<template>
  <header class="header-bar">
    <NuxtLink to="/"><img src="assets/images/logo.svg" alt="Home" class="header-bar__logo"></NuxtLink>
    <MainNav/>
  </header>
</template>

<style lang="scss">
@use 'assets/scss/responsive';

.header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 64px;

  @include responsive.to-breakpoint(tablet) {
    flex-direction: column;
  }

  &__logo {
    width: 200px;
  }
}
</style>
