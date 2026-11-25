// The Router Confesses — entry program.
//
// Writes one line, at most 200 characters, in which a home Wi-Fi router
// excuses itself for dropping the connection at the exact climax of a movie.
// The line is fixed and deterministic: the same text on every run.
import { mkdirSync, writeFileSync } from "node:fs";

// The router's excuse. The twist: it did not fail by accident — it overheard
// the ending and chose to die rather than spoil it, then takes credit for it.
const LINE =
  "I didn’t drop — I heard who the killer was and took the secret to my grave. You’re welcome.";

const MAX_CHARS = 200;

function main(): void {
  const text = LINE.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1–200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  console.log(`wrote /output/entry.txt (${text.length} characters, 1 line)`);
}

main();
