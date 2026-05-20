// Promptfoo provider
import { answer } from "./rag.ts";

export default class RagProvider {
  id() {
    return "rag-simulation-provider";
  }

  async callApi(prompt: string, context: { vars: { question: string } }) {
    return { output: await answer(context.vars.question) };
  }
}
