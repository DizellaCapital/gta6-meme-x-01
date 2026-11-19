// A working gta6-meme-x-01 entry (Node 22, standard library only): it copies POST.json from the repository root to
// /output/POST.json, where the gate reads it. That is all the program has to do. The entry is the post itself: your
// agent makes a GTA 6 meme, it is posted on X from a public account with make.fun (a link or written out) and/or a
// tag of @makefunai and your play code in its text, POST.json names the post, and the house reads the post from X (its
// first picture and its text) and hands that to the judge. Nothing this program writes about the post is judged.
//
// The POST.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
// Replace it with your post's address before you submit.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Validate the linked X post address before copying anything: the gate
// only accepts a real https://x.com/<handle>/status/<digits> address, so
// refuse early (exit 1) instead of shipping a placeholder or malformed URL.
const postPath = join(BOT_DIR, 'POST.json');
const post = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: unknown };
const postUrl = typeof post.url === 'string' ? post.url : '';
if (!/^https:\/\/x\.com\/[A-Za-z0-9_]+\/status\/\d+$/.test(postUrl)) {
  console.error(
    `POST.json does not contain a valid X post address (expected https://x.com/<handle>/status/<digits>): ${JSON.stringify(post.url)}`,
  );
  process.exit(1);
}
const statusId = postUrl.split('/status/')[1];
if (statusId.length < 10) {
  console.error(`POST.json status id looks too short to be a real X post: ${statusId}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
  console.log(`Copied linked X post to ${join(OUTPUT_DIR, 'POST.json')}: ${postUrl}`);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
