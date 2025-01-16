# Floating toll points

## Intro

Your crew is finally on their way—blasting through the stars and charting new territories! However, there’s one problem:
intergalactic highways are expensive.

You’ve got 50 Credits in your account (not enough for a vacation, but it'll do), and as you travel, you’ll pass through
a series of toll booths. Each toll booth charges a small fee to pass. It doesn’t sound like much at first, but space
travel has a way of sneaking up on your finances.

The first toll booth is number "0", and you need to figure out where you’ll run out of money.

Your task:

Starting with 50 Credits, subtract the toll fees at each booth until you’re down to 0 Credits.  
Report the toll booth number where this happens.  
This is where you can have a crew member wait with some extra spare cash for the rest of the way.

## Example

Let's say we have **20 credits** instead of 50, and we need to run through these toll points:

`[0, 2, 5, 2.5, 1, 0, 5.5, 4, 0, 1, 3.5, 2, 0, 6, 1]`

The **first** toll point that reduces our credit to 0 would be toll station **7**, because:

`20 - 0 - 2 - 5 - 2.5 - 1 - 0 - 5.5 - 4 = 0`
