# Card Collection API

Este projeto API REST simples com Node.js e Express para gerenciar cartões postais (CRUD em memória), desenvolvido como parte da disciplina **Arquitetura Server-Side** do curso de Pós-Graduação em Desenvolvimento Full Stack – PUCRS.

## Rotas

- `GET /api/cards` – lista todos os cartões
- `GET /api/cards/:id` – busca por ID
- `POST /api/cards` – cria novo cartão
- `PUT /api/cards/:id` – atualiza cartão
- `DELETE /api/cards/:id` – remove cartão

## Como executar

1. Instale as dependências:

```
npm install
```

2. Inicie o servidor:

```
node server.js
```

Acesse em `http://localhost:3000`

## Tecnologias

- Node.js
- Express
- JavaScript