const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb://localhost/tejasDBex'

const app = express()

mongoose.connect(url ,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open', function(){
    console.log("Connected...")
})
app.use(express.json())

const tejasRouter = require('./routes/tejas')
app.use('/tejas',tejasRouter)

app.listen(9000,function(){
    console.log("Server Started...")
})