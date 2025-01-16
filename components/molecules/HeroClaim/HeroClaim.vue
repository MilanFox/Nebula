<template>
  <h1 class="hero-claim">
    Putting <em>Fun</em> in <em>Fundamentals</em>
  </h1>
  <hr aria-hidden="true">
</template>

<style lang="scss">
@use 'assets/scss/responsive';
@use 'assets/scss/colors';

.hero-claim {
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  margin: 0;
  text-wrap: balance;

  @include responsive.from-breakpoint(tablet) {
    font-size: 48px;
  }

  @include responsive.from-breakpoint(desktop) {
    font-size: 64px;
  }

  em {
    font-style: normal;
    color: colors.$blue;
  }
}
</style>
