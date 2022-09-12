const express = require('express');
const _ = require('lodash');
let log = console.log


const app = express()


app.set("view engine", "ejs")

app.use(express.static('static'))
app.use(express.urlencoded({extended: true}))
const port = process.env.port || 3000
app.listen(port)


app.get('/', ((req,res)=>{
    res.render("index" ,{title:'home'})
}))

app.get('/home', ((req,res)=>{
    res.render("home", {title:'main'})
}))