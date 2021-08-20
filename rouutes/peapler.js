const express = require("express")
const peapler=express.Router()
var people=require('../models/people')



peapler.post("/",(req,res)=>{

    try{
        let newPeople=  new people{...(req.body)}
        let   = await newPeople.save()
        res.send=({result,msg:'contact saved'}) 

    }
    catch (error) {
        res.send=({msg:'error'}) 

    }


})

let arraylofpeople = [
    {name:'oussma',lastname:'elkadhi',age:27,favouritefood:'chicken wings'},
    {name:'chairet',lastname:'med',age:25,favouritefood:'couscous'},
    {name:'oussama',lastname:'mzobaa',age:31,favouritefood:'bagette farcie'},
];

var createmanypeapler = function (arraylofpeople,done){
    Person.create(arraylofpeople,(error,createdpeople) => {
        if (error){
            console.log("error")
        }else{
             done(null,createdpeople)
        }
    })
}