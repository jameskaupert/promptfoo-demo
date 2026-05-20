# promptfoo-demo
Playground for promptfoo evals. Simulates RAG retrieval by stuffing a local file's contents into context, then uses promptfoo to run various evals.

An AI-generated story in the style of a TTRPG adventure serves as the document to retrieve details from. This serves as an example of synthetic data, in this case to avoid licensing issues, but in the real world could also be to avoid exposing real customer data, PII, proprietary info, etc...

This approach was chosen to showcase who promptfoo evals detect a model's ability to:
1. find correct, story-specific information
2. avoid returning generic fantasy information (including a couple of intentionally inserted red herrings in the story)

## Installation
Install node
```
mise install
```

Install npm modules
```
mise run install
```

## Running the evals
```
mise run eval
```

## Viewing the results
```
mise run view
```

### Sample results
![Failing LLM Judge](images/failing-llm-judge.png)

## Running llama.cpp locally
I use this command to start Gemma4 locally on my system:
```
llama-server -hf unsloth/gemma-4-E4B-it-GGUF:Q4_K_M --host 0.0.0.0 --port 8081 --n-gpu-layers 99 --reasoning-budget 0 --chat-template-kwargs '{"enable_thinking":false}'
```
