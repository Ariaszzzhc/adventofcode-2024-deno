import { toReadableStream } from "@std/io";
import { toLines } from "@std/streams/unstable-to-lines";

export function readlines(name: string) {
  const file = Deno.openSync(name, { read: true });
  const lines = toLines(toReadableStream(file));

  return lines;
}
