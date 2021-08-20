const express = require("express")

const app =express()


require('dotenv').config()

var   connectDB = require('./config/connectDB') ;


connectDB()

app.use(express.json())

app.listen(process.env.PORT,(err) =>  err? console.log(err):console.log('server is running'))
