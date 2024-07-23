const express=require('express');
const cors=require('cors');
// const bodyParser=require('body-parser');
const app=express();

require('dotenv');
require('./db');

app.use(cors());
// app.use(bodyParser());
app.use(express.json());
const {auth}=require('./middlewares/auth.middleware');

const userRouter=require('./routers/users.router');
const authRouter=require('./routers/auth.router');
const notesRouter=require('./routers/notes.router');
const { parse } = require('dotenv');

app.get('/',(req,res)=>{
    res.send("hello cipher schools")
})

app.use('/api/notes',auth,notesRouter);
app.use('/api/users',userRouter);
app.use('/api/auth',authRouter);

const PORT=process.env.PORT || 3001;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})