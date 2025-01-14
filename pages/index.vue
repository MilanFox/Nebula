<template>
  <HeroClaim/>
  <section class="home__intro">
    <div class="home__intro-render">
      <img src="assets/images/galaxy.png" alt="" class="home__intro-image home__intro-image--rotating">
      <img src="assets/images/ship.png" alt="" class="home__intro-image">
    </div>
    <div class="home__intro-text">
      <div>
        <p>Welcome to <em>Nebula</em>, a challenge-driven platform designed to strengthen your coding fundamentals.</p>
        As the Captain of the ISS Nebula, you’ll solve puzzles and tackle algorithmic challenges while navigating the
        unknowns of space. Each puzzle is crafted to help you master key programming concepts, making learning both fun
        and impactful.
        Ready to embark on your adventure? Let's decode the future, one challenge at a time.
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use 'assets/scss/animations';
@use 'assets/scss/colors';
@use 'assets/scss/responsive';

.home {
  &__intro {
    padding-top: 32px;
    display: grid;

    @include responsive.from-breakpoint(tablet) {
      grid-template-columns: 1fr 2fr;
    }

    &-text {
      font-size: 18px;
      line-height: 150%;
      display: grid;
      place-items: center;
      padding: 0 32px;
      text-wrap: balance;

      em {
        font-style: normal;
        color: colors.$blue;
        font-weight: 700;
        text-transform: uppercase;
      }
    }

    &-render {
      display: grid;
      isolation: isolate;
    }

    &-image {
      width: 75%;
      aspect-ratio: 1;
      place-self: center;
      grid-column: 1;
      grid-row: 1;

      &--rotating {
        @include animations.rotation(300s);
        z-index: -1;
      }
    }
  }
}
</style>
<script setup lang="ts">
</script>
