const express = require('express');
const app = express()
const port = 8080;

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/page',(req,res)=>{
    res.sendFile('data.js',{root:__dirname})
})

app.listen(port,()=>{
    console.log('the website listening on port 8080')
})