// Wrapper to ask questions via CLI

import { answer } from "./rag.ts";

const question = process.argv[2];
if (!question) {
  console.error('Usage: npx tsx ask.ts "your question here"');
  process.exit(1);
}
answer(question).then(console.log);
