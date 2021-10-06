const express = require('express')
const app = express()
const port = 3003

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/labas', (req, res) => {
    res.send('Labas, Pasauli')
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})