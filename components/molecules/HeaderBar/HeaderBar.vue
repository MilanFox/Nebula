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
    margin: 0;
  }

  &__logo {
    width: 300px;
    margin-bottom: 16px;

    @include responsive.from-breakpoint(tablet) {
      width: 200px;
      margin: 0;
    }
  }
}
</style>
