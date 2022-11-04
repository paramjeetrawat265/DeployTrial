const express=require("express");
require("dotenv").config();
const PORT=process.env.PORT||5000;
const app=express();

app.get("/",(req,res)=>{
    res.send("Task is runing");
})

app.listen(PORT,()=>{
    console.log("listen at port 5000");
})