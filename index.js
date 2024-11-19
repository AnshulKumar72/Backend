require('dotenv').config();
const express=require("express");
const app=express();

const port=4000;

app.get('/',(req,res)=>{
    res.send("Hello ,I am Anshul Kumar");
})

app.get('/twitter',(req,res)=>{
    res.send("Anshuldotcom");
})

app.get('/login',(req,res)=>{
    res.send("<h1>Login successfully</h1>");
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai or Code</h2>");
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app is listening on port ${4000}`);
})