<template>
  <div>
    <ContentSection title="Intro">
      <p>The insurance company finally gave you the green light to start prepping your ship, but now you’ve run into
        another issue. While running diagnostics, the navigation computer flagged something weird about the emergency
        landing coordinates stored in its system.</p>

      <p> Apparently, the computer recorded multiple copies of the same coordinates. Why? No one knows. Maybe the
        computer was bored, or maybe your navigator bot had one too many cups of oil during the last update and is
        seeing
        double. Either way, the system is refusing to move forward until you tidy things up.
      </p>

      <p>Your task is to figure out how many unique coordinate pairs are stored in the list (your input). Each pair
        consists of two numbers `[x, y]`, representing a potential landing spot.
      </p>

      <p>Two coordinate pairs are considered the same if their values are identical, like `[1, 2]` and `[1, 2]`.
        Coordinate pairs like `[1, 2]` and `[2, 1]` are not considered equal, since they mark two different locations.
      </p>

      <p><em>How many unique coordinates are there in your list?</em> Time to show the computer who’s boss.
      </p>
    </ContentSection>

    <ContentSection title="Examples">
      <p><code>[[1,2],[3,4],[5,6],[7,8],[9,0]]</code> contains <code>5</code> unique pairs.</p>
      <p><code>[[1,2],[1,2],[1,2],[1,2],[1,2]]</code> contains only <code>1</code> unique pair.</p>
      <p><code>[[1,2],[2,1],[5,6],[6,5],[6,5]]</code> contains <code>4</code> unique pairs.</p>
    </ContentSection>
  </div>
</template>
