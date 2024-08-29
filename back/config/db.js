// back/config/db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',         // Nome do usuário do banco de dados
  host: 'localhost',        // Endereço do host do banco de dados
  database: 'clientes',      // Nome do banco de dados
  password: 'root',         // Senha do banco de dados
  port: 5432,               // Porta do banco de dados
});

module.exports = pool;