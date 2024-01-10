const express = require("express")
const app = express()
require("dotenv").config()
const port = 3000



app.get("/",(req,res)=>{
    res.json({messgae:"u get this"})
})




app.listen(port,()=>{
    console.log("server running on port ",port);
})