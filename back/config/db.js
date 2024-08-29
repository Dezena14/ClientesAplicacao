// back/config/db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'teste',         // Nome do usuário do banco de dados
  host: 'clientes2.cb8ese40u5q9.us-east-1.rds.amazonaws.com',        // Endereço do host do banco de dados
  database: 'clientes',      // Nome do banco de dados
  password: 'S2OaO78v6pMJMFGa2dPz',         // Senha do banco de dados
  port: 5432,               // Porta do banco de dados
});

module.exports = pool;