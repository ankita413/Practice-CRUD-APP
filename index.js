const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname,'views'));
app.set('view engine','ejs');
app.get('/dog',(req,res)=>{
    res.send('Wooff');
})
app.listen(3000,()=>{
    console.log("Connected!!");
})