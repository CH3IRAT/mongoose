var mongoose = require("mongoose")
var schema=mongoose.Schema


const peopletschema = new schema ({

    name:{
        type:String ,
        require:true
    },

    age:{
        type:Number ,
    },

    phone:{
        type:Array ,
    },


})

module.exports=people=mongoose.model("people",peopletschema)