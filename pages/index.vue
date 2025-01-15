<template>
  <HeroClaim/>
  <ContentSection>
    <GridLayout class="home__intro" layout="1-2">
      <template #left>
        <div class="home__intro-render">
          <img src="assets/images/galaxy.webp" alt="" class="home__intro-image home__intro-image--rotating">
          <img src="assets/images/ship.webp" alt="" class="home__intro-image">
        </div>
      </template>
      <template #right>
        <div class="home__intro-text">
          <div>
            <p>
              Welcome to <em>Nebula</em>, a challenge-driven platform designed to strengthen your coding fundamentals.
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
  <ContentSection title="Puzzles">
    <PuzzleCardList/>
  </ContentSection>
  <ContentSection title="Frequently Asked Questions">
    <AccordionItem title="This looks an awful lot like Advent of Code">
      <p>First of all it doesn't <em>look</em> like AoC. I've put way more emphasis on the frontend. 😉</p>
      <p>But yes, this is very heavily inspired by it. I was looking for a fun project and thought of this to spread the
        puzzle love a bit. The puzzles in this project are a lot easier and less algorithm-heavy though to make it more
        accessible to beginners.</p>
    </AccordionItem>
    <AccordionItem title="How does this work?">
      <p>Every puzzles task is clearly described inside the puzzle - you might interpret it a bit though, otherwise it
        won't be a puzzle, right?</p>
      <p>Each puzzle results in a clear answer, which for now is <em>always</em> going to be a number of some sort.</p>
    </AccordionItem>
    <AccordionItem title="My solution isn't being accepted, why?">
      <p>There's three possible answers here:</p>
      <p><em>Your Solution</em> is just wrong. I've put a lot of effort into ensuring that the validation logic works.
        There are automatic tests in place and I had them manually tested.</p>
      <p><em>My</em> input-generation or validation logic is wrong. That can happen. If you suspect an error on my end,
        just report it to me!</p>
      <p>You have the solution for a different input. Every Account gets a different input to make it more fun.
        Especially if you've logged in anonymously, your output might have changed in between logins or devices. If you
        want to ensure that your input stays consistent, then consider signing in for an actual account.</p>
    </AccordionItem>
    <AccordionItem title="Can't I just use AI?">
      <p>Yup - nothing is stopping you... Actually the puzzles are simple enough that I have no doubt even an older
        version of ChatGPT will be able to solve them. But what would be the point there? You would only cheat
        yourself.</p>
    </AccordionItem>
    <AccordionItem title="Can I suggest a puzzle?">
      <p>Sure. Why not!</p>
      <p>If you look at the Backend Repo you will find all puzzles. Just follow the format and make a pull request.</p>
    </AccordionItem>
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

        & {
          z-index: -1;
        }
      }
    }
  }
}
</style>

