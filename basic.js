const express = require('express')

const app = express()

app.get('/',(req, res) =>{
    res.json({message:"I am homepage"})
})
app.get('/about',(req,res) =>{
    res.json({message:"I am about"})
})
app.get('/contact',(req, res) =>{
    res.json({email:`support@pwskills.com`})
})

const PORT = 8080

app.listen(PORT, ()=>{
    console.log(`server is on ${PORT}`);
})