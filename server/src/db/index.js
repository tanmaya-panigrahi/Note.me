require('dotenv').config();
const mongoose =require('mongoose');


let MONGODB_URI=process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log("error connecting to mongodb",err)
})

