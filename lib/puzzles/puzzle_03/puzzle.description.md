# The side effects of space travel

## Intro

With your spaceship nearly ready to launch, it’s time to tackle the most critical part of the mission: assembling your
crew.
After all, someone needs to steer, someone needs to fix things when they inevitably break, and someone definitely needs
to bring you snacks.

You’ve narrowed the candidates down to a shortlist, but there’s a catch—space travel is tough on motivation. Each
candidate starts with a **motivation level** between 1 and 100, but every time they perform their assigned job, it
chips away at their enthusiasm. Some jobs are harder than others, taking between 1 and 10 points of motivation each
time, and you estimate that on average every one of those tasks needs to be done 10 times.

You can think of two strategies on how to keep your crew from burning out too soon:

1. **Scenario A**: You run everything as planned, everyone needs to do their job 10 times.
2. **Scenario B**: You promote them all, increasing their motivation by 10 once, since this comes with a pay raise.
   Obviously they would also need to do more work to deserve this - lets say they would need to do their respective job
   15 times instead of 10 times as planned.

Your task is simple:

- Simulate each scenario by reducing each candidate's **motivation** every time they do their respective job for a total
  of 10 times (or 15 times in Scenario B)
- Count how many crew members are still motivated (i.e., have a **positive**  motivation value) after their work is
  done.
- Choose the **scenario where more candidates are motivated** and report the **number of motivated crew members**.

Time to show some leadership, Captain! Can you make the right call? Or will your crew start plotting a mutiny before
you’ve even left the launchpad?

## Examples

Crew Member A: `{ motivation: 50, workload: 5 }` isn't motivated either way.  
Crew Member B: `{ motivation: 55, workload: 4 }` will stay motivated in both scenarios.  
Crew Member C: `{ motivation: 92, workload: 9 }` only stays motivated under normal conditions.  
Crew Member D: `{ motivation: 10, workload: 1 }` only stays motivated after a pay raise.  
