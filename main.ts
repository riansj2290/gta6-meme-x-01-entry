// Entry program for the make.fun bounty "Post a GTA 6 meme on X"
// (gta6-meme-x-01).
//
// The real entry is the post out on X: a GTA 6 launch-week meme with
// make.fun's ghost in the picture (see meme.png), its address recorded in
// POST.json next to this file. All this program does is hand that address to the house:
// it copies POST.json from the bot directory into the output directory,
// where the gate picks it up.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The output directory may not exist yet on a fresh grader run.
mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (err) {
  console.error(
    `Failed to copy POST.json from ${botDir}: ${(err as Error).message}`,
  );
  process.exit(1);
}
