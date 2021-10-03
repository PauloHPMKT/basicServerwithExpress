// creating server and routs with express

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Página principal')
})

app.get('/sobre', (req, res) => {
    res.send('Essa é a página sobre')
})

app.get('/contato', (req, res) => {
    res.send('Essa é a página contato')
})

// error 404 not found
app.use((req, res) => res.console.log('Página não encontrda'))

const port = process.env.port || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))