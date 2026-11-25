// The Battery's Last Text to Its Charger — entry program (program/v1).
// Writes a single line of plain text (at most 200 characters) to /output/entry.txt.
// Node standard library only. Deterministic: the same text on every single run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT = "1% here. quick confession before i go: i faked the last 5% for an hour just to make you hurry. it worked, you're here now. too late, but still. thanks for coming. now watch me die dramatically. bye.";

const OUT = "/output/entry.txt";

// Make sure the output directory exists, then write the text exactly once.
mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, TEXT + "\n", "utf8");
