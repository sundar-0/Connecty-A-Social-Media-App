const express=require('express');
var bodyParser = require('body-parser')
const app=express();
const path=require('path');
const port=3000;
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
const routes=require('./routes');
routes(app);
app.set('view engine','ejs');
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
// app.use(function(req,res,next){
// res.setHeader('Access-Control-Allow-Origin','*')
// res.setHeader('Access-Control-Allow-Methods','GET')
// res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
// next();
// })