const express = require('express');
const app = express();
const cardRouter = require('./routes/cardRoutes');

app.use(express.json());
app.use('/api/cards', cardRouter);

app.get('/', (req, res) => res.send('API Card Collection'));

app.listen(3000, () => console.log('Servidor rodando => http://localhost:3000'));