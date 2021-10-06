const express = require('express')
const app = express()
const port = 3003
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'nodejs123456',
    database: 'articles'
})

con.connect(err => {
    if (err) {
        throw err
    }
    console.log('Yes!');
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/labas', (req, res) => {
    res.send('Labas, Pasauli')
})

app.get('/labas/:id', (req, res) => {
    res.send(`Pats tu ${req.params.id}`)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})