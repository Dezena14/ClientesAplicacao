// back/controllers/clienteController.js

const pool = require('../config/db');

// Cria cliente
const createCliente = async (req, res) => {
  const { nome, cpf, data_nascimento, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO Cliente (nome, cpf, data_nascimento, email) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, cpf, data_nascimento, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Resgata todos os clientes
const getClientes = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public."Cliente"');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Resgata os clientes por ID
const getClienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM clientes WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Atualiza um cliente
const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, cpf, data_nascimento, email } = req.body;
  try {
    const result = await pool.query(
      'UPDATE clientes SET nome = $1, cpf = $2, data_nascimento = $3, email = $4 WHERE id = $5 RETURNING *',
      [nome, cpf, data_nascimento, email, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Exclui um cliente
const deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM clientes WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Cliente não encontrado' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createCliente,
  getClientes,
  getClienteById,
  updateCliente,
  deleteCliente,
};