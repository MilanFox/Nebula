# Okay, copy that!

## Intro

The insurance company _finally_ gave you the green light to start prepping your ship, but now you’ve run into another issue. While running diagnostics, the navigation computer flagged something weird about the **emergency landing coordinates** stored in its system.

Apparently, the computer recorded multiple copies of the _same_ coordinates. Why? No one knows. Maybe the computer was bored, or maybe your navigator bot had one too many cups of oil during the last update and is seeing double. Either way, the system is refusing to move forward until you tidy things up.

Your task is to figure out how many **unique coordinate pairs** are stored in the list (your input). Each pair consists of two numbers `[x, y]`, representing a potential landing spot.

Two coordinate pairs are considered the same if their values are **identical**, like `[1, 2]` and `[1, 2]`.  Coordinate pairs like `[1, 2]` and `[2, 1]` are **not** considered equal, since they mark two different locations.

How many **unique** coordinates are there in your list? Time to show the computer who’s boss.

## Examples

`[[1,2],[3,4],[5,6],[7,8],[9,0]]` - contains **5** unique pairs
`[[1,2],[1,2],[1,2],[1,2],[1,2]]` - contains only **1** unique pair
`[[1,2],[2,1],[5,6],[6,5],[6,5]]` - contains **4** unique pairs
