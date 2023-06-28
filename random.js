const express = require('express')

const app = express()

let random = 0;

app.get('/',(req, res) =>{
    random = parseInt(Math.random() * 100 + 1)
    res.json({random})
})
const port = 8080

app.listen(port, ()=>{
    console.log('i am running');
})