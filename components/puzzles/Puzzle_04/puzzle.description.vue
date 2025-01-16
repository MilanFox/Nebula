<template>
  <div>
    <ContentSection title="Intro">
      <p>Your crew is finally on their way—blasting through the stars and charting new territories! However, there’s one
        problem: intergalactic highways are expensive.</p>

      <p>You’ve got 50 Credits in your business account (not enough for a vacation, but it'll do), and as you travel,
        you’ll pass through a series of toll booths. Each toll booth charges a small fee to pass. It doesn’t sound like
        much at first, but space travel has a way of sneaking up on your finances.</p>

      <p>Because of intergalactic regulations, it is defined that the first booth is number 0, the second one number 1,
        etc., and you need to figure out where you’ll run out of money, so you can send someone to wait there with a
        fresh
        credit card.</p>

      <p><strong>Your task is:</strong></p>

      <p>Starting with 50 Credits, subtract the toll fees at each booth until you’re down to exactly 0 Credits. <em>Report
        the toll booth number where this happens.</em></p>
    </ContentSection>

    <ContentSection title="Examples">
      <p>Let's say we have <strong>20 credits</strong> instead of 50, and we need to run through these toll points:</p>
      <p><code>[0, 2, 5, 2.5, 1, 0, 5.5, 4, 0, 1, 3.5, 2, 0, 6, 1]</code></p>
      <p>The <em>first</em> toll point that reduces our credit to 0 would be toll station <code>7</code>, because: 20 -
        0
        - 2 - 5 - 2.5 - 1 - 0 - 5.5 - 4 = 0</p>
    </ContentSection>
  </div>
</template>
