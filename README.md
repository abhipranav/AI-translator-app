# AI Translator App

Single-page translator UI built with Vite and the OpenAI Chat Completions API. Users type text, pick a target language, and see the translated result.

## Features
- Text input with language radio buttons
- Loading state + disabled button while requesting
- Result panel showing original and translated text
- “Start over” reset flow
- Basic error handling and token usage logging

## Tech Stack
- Vite (vanilla JS)
- OpenAI JavaScript SDK
- CSS + Google Fonts (Poppins)

## Prerequisites
- Node.js ≥ 18
- npm
- OpenAI API key

## Setup

1. **Install dependencies**
npm install

2. **Environment variables**

Create `.env` in the project root:
```
VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

3. **Run locally**
```
npm run dev
```

## Usage
1. Enter the text to translate.
2. Select a language radio button.
3. Click **Translate**.
4. View the result panel; use **Start over** to reset.

## Security Warning
The current implementation calls OpenAI directly from the browser using `dangerouslyAllowBrowser: true`, which exposes your API key to anyone with DevTools. For production, move the API call to a backend or serverless function and keep the key server-side.

## Known Limitations
- Uses placeholder model name `gpt-4.1-nano-2025-04-14`; replace with a valid model (e.g., `gpt-4o-mini`).
- No retry/backoff logic.
- API key exposure (see security warning).

## License
MIT (update if needed).


## Screenshots:
<img width="394" height="801" alt="input-screen" src="https://github.com/user-attachments/assets/450e0fb9-e552-4fb4-92f7-db49883dd19b" />
<img width="389" height="801" alt="output-screen" src="https://github.com/user-attachments/assets/9cd9b517-d97c-4a18-bec1-7788c56be015" />


