# CRUD de Produtos com MongoDB + Redis

Projeto desenvolvido como prática das aulas de Bancos de Dados NoSQL do curso Full Stack PUCRS.

## Objetivo

Implementar um CRUD de produtos com dados armazenados no MongoDB e cacheados no Redis para otimizar o desempenho.

## Tecnologias

- Node.js
- Express
- MongoDB
- Redis

## Como rodar

1. Instale as dependências com `npm install`
2. Configure as conexões do MongoDB e Redis no projeto
3. Inicie o servidor com `node server.js`

---

### Rotas principais

- **POST /products** – Cria produto
- **GET /products** – Lista produtos com cache
- **PUT /products/:id** – Atualiza produto
- **DELETE /products/:id** – Exclui produto