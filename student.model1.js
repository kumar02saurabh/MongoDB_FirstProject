// define th scheme to th students collections to be stored in data base 
const mongoose =require("mongoose")

// creating the schema 
const studentSchema= new mongoose.Schema ({
    name : {
        type :String,
        required:true
    },
   
    age :{
      type: Number,
      min:19, 
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        minLength:15,
    },
    subjects:[String],

    // To remove the version using version key 
    // createdAt:{
    //     type:Date,
    //     immutable:true,
    //     default:()=>{
    //         return Date.now()
    //     }
    // }
},{versionKey:false,timestamps:true})

// go ahead & Create corresponding collections in DB
module.exports=mongoose.model("Student",studentSchema)