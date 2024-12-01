const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors = require('cors');

app.use(cors());


const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'projetob1',  
  password: '1234',   
  database: 'produtos_db',  
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao banco de dados MySQL');
});

app.use(express.json());

app.get('/api/produtos', (req, res) => {
  db.query('SELECT * FROM produtos', (err, results) => {
    if (err) {
      console.error('Erro ao consultar produtos:', err);
      return res.status(500).json({ message: 'Erro ao consultar produtos' });
    }
    res.json(results); 
  });
});

app.post('/api/produtos', (req, res) => {
  const { nome, descricao, preco } = req.body;
  const query = 'INSERT INTO produtos (nome, descricao, preco) VALUES (?, ?, ?)';
  db.query(query, [nome, descricao, preco], (err, result) => {
    if (err) {
      console.error('Erro ao cadastrar produto:', err);
      return res.status(500).json({ message: 'Erro ao cadastrar produto' });
    }
    res.status(201).json({ message: 'Produto cadastrado com sucesso!' });
  });
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
