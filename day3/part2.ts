import { readlines } from "../utils.ts";

const commandReg = /(mul|do(|n't))\((\d{1,3},\d{1,3}|)\)/g;

export async function part2() {
  const linestream = readlines("input/day3.txt");

  const lines = [];

  for await (const line of linestream) {
    lines.push(line);
  }

  const memory = lines.join("");

  const commandExpr = memory.matchAll(commandReg);

  let sum = 0;
  let calculating = true;
  for (const command of commandExpr) {
    const op = command[1];
    const value = command[3];

    switch (op) {
      case "mul":
        {
          if (calculating) {
            sum += value
              .split(",")
              .reduce((pre, cur) => pre * parseInt(cur), 1);
          }
        }
        break;

      case "do":
        {
          calculating = true;
        }
        break;

      case "don't":
        {
          calculating = false;
        }
        break;

      default:
        break;
    }
  }

  return sum;
}
