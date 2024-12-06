import { readlines } from "../utils.ts";

export async function part2() {
  const lines = readlines("input/day1.txt");

  const left = [];
  const right = [];

  for await (const line of lines) {
    const nums = line.split("   ");
    left.push(parseInt(nums[0]));
    right.push(parseInt(nums[1]));
  }

  const resMap = new Map<number, number>();

  let sum = 0;

  for (const num of left) {
    if (resMap.has(num)) {
      sum += resMap.get(num)!;
    } else {
      let count = 0;
      for (let i = 0; i < right.length; i++) {
        if (right[i] === num) {
          count++;
        }
      }

      const similarity = count * num;
      resMap.set(num, similarity);
      sum += similarity;
    }
  }
  return sum;
}
