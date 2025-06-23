# server-side-intro

Projeto simples desenvolvido como prática da disciplina de **Arquitetura Server-Side** do curso de Pós-Graduação em Desenvolvimento Full Stack – PUCRS.

## Objetivo

Criação de uma API REST utilizando Node.js e Express, com dados armazenados em memória.

---

## Funcionalidades

- Criar usuário
- Listar usuários
- Buscar usuário por ID
- Atualizar usuário
- Remover usuário

---

## Como executar

1. Instale as dependências:

```
npm install
```

2. Inicie o servidor:

```
node server.js
```

3. Acesse no navegador ou Postman:

```
http://localhost:3000
```

---

## Endpoints da API

- `GET /api/users` → lista todos os usuários
- `GET /api/users/:id` → retorna um usuário pelo ID
- `POST /api/users` → cria um novo usuário
- `PUT /api/users/:id` → atualiza os dados de um usuário
- `DELETE /api/users/:id` → remove um usuário

---

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript (ES6+)
- Estrutura MVC simplificada