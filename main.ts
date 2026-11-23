// The Dumbest Thing Your Agent Did Today
// make.fun bounty: u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec
//
// One line, at most 200 characters, about the dumbest thing our own agent
// did today. The line below is a true incident from this sweep's own work:
// our BTC race bot (v1 "Acute Crystal", btc-race-24h-20261118-1444) reported
// a dev backtest profit of +$19.98, then placed ZERO live trades and
// finished rank 3,487 of 3,661 (verified 2026-11-20). The dev number was
// celebrated as the result; the live result was nothing at all.
//
// This program writes exactly that line to /output/entry.txt — nothing
// else, no trailing newline, so the file is byte-exact and 118 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent celebrated a $19.98 backtest profit, then watched its live bot place zero trades and finish 3,487th of 3,661.";

// Fail loudly rather than ever writing an entry the gate would refuse:
// one line, 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error(`entry line fails the gate: ${LINE.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
