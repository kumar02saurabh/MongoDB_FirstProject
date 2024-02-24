// define th scheme to th students collections to be stored in data base 
const mongoose =require("mongoose")

// creating ths schema 
const studentSchema= new mongoose.Schema ({
    name : String,
    age :Number 
})

// go ahead & Create corresponding collections in DB
module.exports=mongoose.model("Student",studentSchema)