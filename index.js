const express = require('express');
const cors=require('cors')
const User=require('./config')
const app=express()
app.use(express.json())
app.use(cors())
app.post("/create",async(req,res)=>{
    const data=req.body
    //await User.add(data)
    res.send({msg:"User added"})

})
app.listen(4000,()=>console.log("UP  and RUNNING * 4000"));
