/* 
Descricao: Arquivo de configuração dos verbos HTTP
Aluno: Yan Silveira de Souza
Data: 27 / 07 / 2021
*/

const express = require('express');
const app = express()
const data = require("./data.json");
const cors = require("cors");
app.use(express.json());
app.use(cors());

// VERBOS HTTP
// GET: Receber
// POST: Enviar
// PUT: Atualizar
// DELETE: Deletar

app.listen(process.env.PORT || 3000, console.log("Servidor up"));

app.get("/clientes", function (req, res) {
  res.json(data);
});

app.get("/clientes/:id", function (req, res) {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  res.json(client);
});

app.post("/clientes", function (req, res) {
  const { name, email } = req.body;

  res.json({ name, email });
});

app.put("/clientes/:id", function (req, res) {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  const { name } = req.body;

  client.name = name;

  res.json(client);
});

app.delete("/clientes/:id", function (req, res) {
  const { id } = req.params;
  const clientsFiltered = data.filter(client => client.id != id);

  res.json(clientsFiltered);
});

app.list(3000, function () {
  console.log("Server is running");
});