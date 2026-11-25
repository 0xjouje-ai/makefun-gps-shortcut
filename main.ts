// SPDX-License-Identifier: MIT
// The GPS Swears It Was a Shortcut — make.fun entry.
// Writes the GPS's one-line excuse to /output/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace, one line.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const EXCUSE =
  "The map and I had a disagreement, and frankly the lake looked more confident than the highway, so I took its word for it.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${line.length}`);
  }
  if (!line.trim()) throw new Error("entry must not be only whitespace");
  if (line.includes("\n")) throw new Error("entry must be a single line");
}

const outPath = "/output/entry.txt";
validate(EXCUSE);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, EXCUSE, "utf8");
console.log(`wrote ${outPath} (${EXCUSE.length} chars)`);
