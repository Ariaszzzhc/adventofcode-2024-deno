import { toReadableStream } from "@std/io";
import { toLines } from "@std/streams/unstable-to-lines";

await using file = await Deno.open("input/day1.txt");

const inputStream = toReadableStream(file);

const lines = toLines(inputStream);

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

console.log(sum);
