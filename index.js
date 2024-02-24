const mongoose=require('mongoose')

const studentModel =require("./models/student.model1")
// Where to connect 
mongoose.connect("mongodb://localhost/be_demodb")

// Ordering to Connect..Two Possile Case (1)error (2)Success 
const db= mongoose.connection

db.on("error",()=>{
    console.log("error while connecting to DB")
   
});

db.once("open",()=>{
    console.log("Connected to mongoDB")
     // logic to insert data into DB
     init ()

    //  Running the Queries
        dbQueries()
})
     async function init(){
        // logic to insert data into DB
        const student={
            name:"Saurabh",
            age:23,
            email:"saurabhkumar@gmail.com",
            subjects:["C++","Python","Full Stack"],
            }
        const std_obj =await studentModel.create(student)
        console.log(std_obj)
     }

     async function dbQueries(){
        // Read the student Data 
        console.log("Inside the Db Queries ")
        // Read the student data on the basis of id 
        try{ const student= await studentModel.findById("65d8b78292a46ddaaa2e0098")
                console.log(student)

            }catch(err){
                console.log(err)
            }

            //  I want to go and search based on name
            try{
                const std=await studentModel.find({name :"kumar" })
                console.log(std)
      
            }
            catch(err){
                console.log(err)
            }
           

     }
