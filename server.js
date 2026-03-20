const express = require('express');

const { criarBanco } = require('./database');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <body>
            <h1>ZelaCidade</h1>
            <h2>Gestão de Problemas Urbanos</h2>
            <p>Endpoint que leva aos incidentes cadastrados: /incidentes</p>
        </body>
        `)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})

app.get('/incidentes', async (req, res) => {
    const db = await criarBanco()
    const listaIncidentes = await db.all(`SELECT * FROM incidentes`)
    res.json(listaIncidentes)
})