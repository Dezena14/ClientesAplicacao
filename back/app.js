// back/app.js

require('./config/db');
const express = require('express');
const cors = require('cors');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();

app.use(cors()); // Permite requisições de qualquer origem

// Para uma origem específica
// app.use(cors({ origin: 'http://44.223.28.193:81' }));

app.use(express.json());

app.use('/clientes', clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});