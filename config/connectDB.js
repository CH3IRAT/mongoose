const express = require("express")
var mongoose = require("mongoose")



var  connectDB =  async ()  =>  {

 try {
    let result =await   mongoose.connect('mongodb://localhost:27017/person', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("data base connected")

     
 } catch (error) {

    console.log("error")
     
 }
       
}

module.exports= connectDB