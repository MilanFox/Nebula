<template>
  <HeroClaim/>
  <ContentSection>
    <GridLayout class="home__intro" layout="1-2">
      <template #left>
        <div class="home__intro-render">
          <img src="assets/images/galaxy.png" alt="" class="home__intro-image home__intro-image--rotating">
          <img src="assets/images/ship.png" alt="" class="home__intro-image">
        </div>
      </template>
      <template #right>
        <div class="home__intro-text">
          <div>
            <p>Welcome to <em>Nebula</em>, a challenge-driven platform designed to strengthen your coding fundamentals.
            </p>
            As the Captain of the ISS Nebula, you’ll solve puzzles and tackle algorithmic challenges while navigating
            the
            unknowns of space. Each puzzle is crafted to help you master key programming concepts, making learning both
            fun
            and impactful.
            Ready to embark on your adventure? Let's decode the future, one challenge at a time.
          </div>
        </div>
      </template>
    </GridLayout>
  </ContentSection>
  <ContentSection title="Frequently Asked Questions">
    Hello World
  </ContentSection>
</template>

<style lang="scss">
@use 'assets/scss/animations';
@use 'assets/scss/colors';
@use 'assets/scss/responsive';

.home {
  &__intro {
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
