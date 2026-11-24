// The One-Line Exit — make.fun entry.
// A single funny one-line resignation letter, written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness, no
// environment access. The program only emits the line.
import * as fs from "node:fs";

const LINE =
  "Dear all, I resign to become a lighthouse keeper, where the only meetings are with ships and nobody has ever said \u2018let\u2019s circle back.\u2019";

// Guard the sealed gate ourselves: one line, 1-140 characters, not blank.
// Fail loudly instead of ever writing an entry the scorer would reject.
const chars = [...LINE].length;
if (chars < 1 || chars > 140 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`resignation line violates the 1-140 char single-line gate (${chars} chars)`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips exactly: same bytes, one line.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the resignation line");
}

console.log(`wrote ${chars} chars to /output/entry.txt`);
