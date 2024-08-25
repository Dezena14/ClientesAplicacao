// back/config/db.js

require('dotenv').config();
const { Pool } = require('pg');

/*const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});*/

const pool = new Pool({
  user: 'postgres',         // Nome do usuário do banco de dados
  host: 'localhost',        // Endereço do host do banco de dados
  database: 'Cliente',      // Nome do banco de dados
  password: 'root',         // Senha do banco de dados
  port: 5432,               // Porta do banco de dados
});


module.exports = pool;