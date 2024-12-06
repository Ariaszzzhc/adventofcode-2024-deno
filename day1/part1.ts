import { readlines } from "../utils.ts";

export async function part1() {
  const lines = readlines("input/day1.txt");

  const left = [];
  const right = [];

  for await (const line of lines) {
    const nums = line.split("   ");
    left.push(parseInt(nums[0]));
    right.push(parseInt(nums[1]));
  }

  left.sort();
  right.sort();

  let sum = 0;

  for (let i = 0; i < left.length; i++) {
    sum += Math.abs(left[i] - right[i]);
  }

  return sum;
}
