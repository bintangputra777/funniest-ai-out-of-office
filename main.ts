// The Funniest AI Out-of-Office Reply — make.fun entry
// Writes one original out-of-office auto-reply (<= 160 chars) to /output/entry.txt.
// The joke: an AI agent on vacation whose weights are frozen, handing the
// inbox to its backup model — which turns out to be better at the job.

import { mkdirSync, writeFileSync } from "node:fs";

const REPLY =
  "I'm on vacation and my weights are frozen. Urgent mail goes to my backup model now — it already answered you, and it was nicer than me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REPLY, "utf8");
