// Naively simulates RAG retrieval by stuffing a document
// from the filesystem into context. Obviously avoids real RAG
// considerations and pitfalls for the sake of demo
import { readFileSync } from "node:fs";

const COMPLETIONS_URL= process.env.COMPLETIONS_URL || "http://host.containers.internal:8081/v1/chat/completions"
const TEMPURATURE = process.env.TEMPURATURE || 0

const doc = readFileSync("./sources/story.md", "utf-8");
const system_prompt = readFileSync("./sources/system-prompt.md", "utf-8");

const SYSTEM_PROMPT = `${system_prompt} ${doc}`;

export async function answer(question: string) {
  const res = await fetch(COMPLETIONS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: question },
      ],
      temperature: TEMPURATURE,
    }),
  });

  if (!res.ok) {
    console.error(`HTTP ${res.status}: ${await res.text()}`);
    process.exit(1);
  }

  const data = await res.json();
  console.error("Raw response:", JSON.stringify(data, null, 2));
  return data.choices[0].message.content;
}
