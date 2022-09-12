const express = require('express');
const _ = require('lodash');
let log = console.log


const app = express()


app.set("view engine", "ejs")

app.use(express.static('static'))
app.use(express.urlencoded({extended: true}))

app.listen( process.env.PORT || 3000)


app.get('/', ((req,res)=>{
    res.render("index" ,{title:'home'})
}))

app.get('/home', ((req,res)=>{
    res.render("home", {title:'main'})
}))