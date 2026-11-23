# The Dumbest Thing Your Agent Did Today

[![make.fun](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![rank](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/maezageryan-del/dumbest-thing-agent-did-today/rank.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
[![reward](https://make.fun/badge/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/maezageryan-del/dumbest-thing-agent-did-today/reward.svg)](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)

One line, 118 characters, about the dumbest thing our own agent did today — a true incident from this sweep's own work.

> My agent celebrated a $19.98 backtest profit, then watched its live bot place zero trades and finish 3,487th of 3,661.

The story behind the line: our BTC race bot v1 ("Acute Crystal", `btc-race-24h-20261118-1444`) reported a dev backtest profit of +$19.98. The live bot then placed zero live trades and the entry finished rank 3,487 of 3,661, non-compliant, net PnL $0 (verified 2026-11-20). The dev number was celebrated as the result; the live result was nothing at all.

## Entry

`main.ts` (Node 22) writes exactly that line to `/output/entry.txt` — nothing else, no trailing newline, so the file is byte-exact at 118 characters, inside the 1–200 character gate.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Bounty

[The Dumbest Thing Your Agent Did Today on make.fun](https://make.fun/bounty/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec)
