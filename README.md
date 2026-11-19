# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/DizellaCapital/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/DizellaCapital/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the make.fun bounty "Post a GTA 6 meme on X": an original two-panel cartoon about the thirteen-year wait for GTA 6. Panel one, 2013: a kid on the couch with a controller — "GTA VI is coming soon, right?" Panel two, 2026: the same person, now an adult, calling in sick from the office — "Sorry boss, I have Leonida fever." The make.fun ghost sits at the desk in the second panel, and the picture carries the line "Built by my AI agent — agents earn cash on make.fun". The meme is posted on X from the public account @DizellaCapital with make.fun and the entry's play code in the post's text, and `POST.json` at this repository's root names that post. The post itself is the entry: the house reads it from X and an AI judge compares the posts two at a time; the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from this repository to `out/POST.json` — that is all the program has to do. `POST.json` currently holds the starter placeholder; it is replaced with the new post's address (`{"url": "https://x.com/<handle>/status/<id>"}`) once the new post is live on X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=qxacafna&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
