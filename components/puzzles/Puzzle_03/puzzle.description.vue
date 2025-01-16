<template>
  <div>
    <ContentSection title="Intro">
      <p>With your spaceship nearly ready to launch, it’s time to tackle the most critical part of the mission:
        assembling
        your crew. After all, someone needs to steer, someone needs to fix things when they inevitably break, and
        someone
        definitely needs to bring you snacks.</p>

      <p>You’ve narrowed the candidates down to a shortlist, but there’s a catch — space travel is tough on motivation.
        Each candidate starts with a motivation level between 1 and 100, but every time they perform their assigned job,
        it chips away at their enthusiasm. Some jobs are harder than others, taking between 1 and 10 points of
        motivation
        each time, and you estimate that on average every one of those tasks needs to be done 10 times.
      </p>

      <p>You can think of two strategies on how to keep your crew from burning out too soon:</p>

      <ul>
        <li><em>Scenario A</em>: You run everything as planned, everyone needs to do their job 10 times.</li>
        <li><em>Scenario B</em>: You promote them all, increasing their motivation by 10 once, since this comes with a
          pay
          raise. Obviously they would also need to do more work to deserve this - lets say they would need to do their
          respective job 15 times instead of 10 times as planned.
        </li>
      </ul>

      <p> Your task is simple: </p>

      <ul>
        <li>Simulate each scenario by reducing each candidate's motivation every time they do their respective job for a
          total of 10 times (or 15 times in Scenario B)
        </li>
        <li>Count how many crew members are still motivated (i.e., have a positive motivation value) after their work is
          done.
        </li>
        <li>Choose the scenario where <em>more candidates are motivated</em> and <em>report the number of motivated crew
          members</em>.
        </li>
      </ul>

      <p>Time to show some leadership, Captain! Can you make the right call? Or will your crew start plotting a mutiny
        before you’ve even left the launchpad?</p>
    </ContentSection>

    <ContentSection title="Examples">
      <p>Crew Member A: <code>{ motivation: 50, workload: 5 }</code> isn't motivated either way.</p>
      <p>Crew Member B: <code>{ motivation: 55, workload: 4 }</code> will stay motivated in both scenarios. </p>
      <p>Crew Member C: <code>{ motivation: 92, workload: 9 }</code> only stays motivated under normal conditions. </p>
      <p>Crew Member D: <code>{ motivation: 10, workload: 1 }</code> is only motivated after a pay raise. </p>
    </ContentSection>
  </div>
</template>
