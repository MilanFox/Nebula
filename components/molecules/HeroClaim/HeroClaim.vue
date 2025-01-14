<template>
  <section class="hero-claim">
    Putting <em>Fun</em> in <em>Fundamentals</em>
  </section>
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

  &::before, &::after {
    content: '';
    display: block;
    margin: 32px 0;
    width: 100%;
    height: 20px;
    background: url('assets/images/dash.svg') repeat-x;
  }

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
