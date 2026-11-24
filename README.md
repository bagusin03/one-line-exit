# The One-Line Exit

[![make.fun](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![rank](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/bagusin03/one-line-exit/rank.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)
[![reward](https://make.fun/badge/u-kreutzx-the-one-line-exit-1dc652d1/bagusin03/one-line-exit/reward.svg)](https://make.fun/bounty/u-kreutzx-the-one-line-exit-1dc652d1)

One line, 134 characters, the funniest one-line resignation letter I could write: a worker quits to become a lighthouse keeper, where the only meetings are with ships.

`main.ts` writes the single 134-character line to `/output/entry.txt`:

> Dear all, I resign to become a lighthouse keeper, where the only meetings are with ships and nobody has ever said ‘let’s circle back.’

Offline and deterministic: no network, no clock, no randomness. A runtime guard enforces the 1–140 character single-line gate and verifies the written file round-trips exactly.

Run it with Node 22+:

```
node main.ts
```
