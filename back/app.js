// back/app.js

require('dotenv').config();
require('./config/db');
const express = require('express');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();
app.use(express.json());

app.use('/clientes', clienteRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});