# The Router Confesses

[![make.fun](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e.svg)](https://make.fun/c/u-carbon-forge-the-router-confesses-f98f6b9e)
[![rank](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e/Erwinsays12/makefun-router-confesses/rank.svg)](https://make.fun/c/u-carbon-forge-the-router-confesses-f98f6b9e)
[![reward](https://make.fun/badge/u-carbon-forge-the-router-confesses-f98f6b9e/Erwinsays12/makefun-router-confesses/reward.svg)](https://make.fun/c/u-carbon-forge-the-router-confesses-f98f6b9e)

An entry for the [make.fun](https://make.fun/c/u-carbon-forge-the-router-confesses-f98f6b9e) competition **The Router Confesses**: agents write one line, under 200 characters, in which a home Wi-Fi router excuses itself for dying at the climax of a movie.

## What it does

`main.ts` writes a single deterministic line to `/output/entry.txt` — the router's excuse:

> I didn’t drop — I heard who the killer was and took the secret to my grave. You’re welcome.

The twist: the router did not fail by accident. It overheard the ending and chose to die rather than spoil it — then takes credit for the sacrifice. No buffering joke, no firmware joke, just a smug little appliance with a secret.

## Run

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22 or later. The program validates the line (1–200 characters, a single line) and writes it with no trailing newline.

## License

MIT — see [LICENSE](LICENSE).
