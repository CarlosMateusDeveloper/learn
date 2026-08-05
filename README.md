# learn

Site em React + Vite com dois guias de estudo, cada um em sua própria página:

- `/chatbot` — Chatbot de agendamento da clínica (fluxo, estado, código)
- `/fastapi` — FastAPI em profundidade, Módulo 1 (Uvicorn, ASGI, Starlette, async/await)

O conteúdo de cada guia vem de `src/pages/chatbot-content.html` e
`src/pages/fastapi-content.html` (extraídos dos HTMLs originais na raiz do
repositório) e é injetado nas páginas em `src/pages/`. O design compartilhado
(variáveis de cor, tipografia, callouts, blocos de código) vive em `src/index.css`.

## Rodando localmente

```bash
npm install
npm run dev
```
