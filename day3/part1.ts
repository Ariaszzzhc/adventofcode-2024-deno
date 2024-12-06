import { readlines } from "../utils.ts";

const mulReg = /mul\(\d{1,3},\d{1,3}\)/g;
const numReg = /\d{1,3}/g;

export async function part1() {
  const lines = readlines("input/day3.txt");

  let sum = 0;
  for await (const line of lines) {
    const result = line
      .matchAll(mulReg)
      .map((x) => {
        const expr = x[0];

        return expr
          .matchAll(numReg)
          .map((x) => parseInt(x[0]))
          .reduce((pre, cur) => {
            return pre * cur;
          }, 1);
      })
      .reduce((pre, cur) => pre + cur, 0);

    sum += result;
  }

  return sum;
}
