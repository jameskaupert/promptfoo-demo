# promptfoo-demo
Playground for promptfoo evals. Simulates RAG retrieval by stuffing a local file's contents into context, then uses promptfoo to run various evals.

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

## Running llama.cpp locally
I use this command to start Gemma4 locally on my system:
```
llama-server -hf unsloth/gemma-4-E4B-it-GGUF:Q4_K_M --host 0.0.0.0 --port 8081 --n-gpu-layers 99 --reasoning-budget 0 --chat-template-kwargs '{"enable_thinking":false}'
```
