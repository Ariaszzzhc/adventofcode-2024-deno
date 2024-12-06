import { readlines } from "../utils.ts";

export async function part1() {
  const lines = readlines("input/day2.txt");

  let safeCount = 0;

  for await (const line of lines) {
    const levels = line.split(" ").map((x) => parseInt(x));

    const rawDiff = levels[1] - levels[0];
    const diff = Math.abs(rawDiff);
    if (diff === 0 || diff > 3) {
      continue;
    }

    const incr = rawDiff > 0;

    let safe = true;
    for (let i = 2; i < levels.length; i++) {
      const rawDiff = levels[i] - levels[i - 1];
      const diff = Math.abs(rawDiff);
      if (diff === 0 || diff > 3) {
        safe = false;
        break;
      }

      if (rawDiff > 0 !== incr) {
        safe = false;
        break;
      }
    }

    if (safe) {
      safeCount++;
    }
  }

  return safeCount;
}
