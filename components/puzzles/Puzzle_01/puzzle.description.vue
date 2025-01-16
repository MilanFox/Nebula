<template>
  <div>
    <ContentSection title="Intro">
      <p>Ah, the glamorous life of a space captain. When you signed up to lead this mission, you probably imagined
        daring
        adventures, intergalactic discoveries, and maybe even finding fame in the history books. But before any of that,
        there's something far more perilous to conquer: bureaucracy.</p>

      <p>Your mission is clear — retrieve a mysterious alien artifact rumored to hold the secrets of the universe.
        Sounds
        thrilling, right? But first, the insurance company needs their paperwork. Apparently, they won't cover "random
        space junk" unless you can provide a detailed inventory and a reasonable estimate of its worth.</p>

      <p>You’ve jotted down the values of everything on board, from your trusty space wrench to that weird glowing
        crystal
        no one remembers packing. Some inventory items are priceless, others… well, let’s just say you might not miss
        that
        half-empty space ramen packet.</p>

      <p>It’s not cost-effective to insure everything (especially that ramen packet) - you would say about half of it is
        mostly worthless and doesn't need to be insured. But where is "half"?</p>

      <p>Your inventory data is a list of 1001 item values (your puzzle input). </p>

      <p><em>Report the value of the item that has equally many items worth less and worth more.</em></p>
    </ContentSection>

    <ContentSection title="Examples">
      <p>For an item list <code>[0, 0, 0, 0, 0, 0, 0, 0, 0]</code> the answer would be <code>0</code>.</p>
      <p>For an item list <code>[1, 2, 3, 4, 5, 6, 7, 8, 9]</code> the answer would be <code>5</code>.</p>
      <p>For an item list <code>[1, 4, 2, 8, 7, 6, 3, 5, 9]</code> the answer would also be <code>5</code>.</p>
      <p>For an item list <code>[0, 10, 2, 83, 7, 61, 4, 35, 9]</code> the answer would be <code>9</code>.</p>
    </ContentSection>
  </div>
</template>
