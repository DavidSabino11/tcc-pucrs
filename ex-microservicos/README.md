# Sistema de Processamento de Pedidos com Microserviços

Simula um sistema de pedidos com:

* API REST em Node.js
* RabbitMQ como broker de mensagens
* Consumidor para processar pedidos

## Como rodar

1. Suba o RabbitMQ:

```
docker-compose up -d
```

2. Rode o consumidor:

```
cd consumer
node consumer.js
```

3. Rode a API:

```
cd pedido-api
npm install
node server.js
```

4. Envie um POST para:

```
http://localhost:3000/pedidos
Body: { "produto": "Livro", "quantidade": 2 }
```
