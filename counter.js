const express = require('express')

const app = express()

let counter = 0

app.get('/', (req, res) =>{
    res.json({counter})
})

app.get('/increment', (req, res) => {
    counter++
    res.json({counter})
})

app.get('/decrement' ,(req, res) =>{
    counter--
    res.json({counter})
})

const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})