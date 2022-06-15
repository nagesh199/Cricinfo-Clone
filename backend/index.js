const express=require("express")
const app=express()
var cors = require('cors')
const data=require("./data")

app.use(cors())
app.get("/",(req,res)=>{
    res.end(JSON.stringify(data))
})
app.listen(3030,()=>{
    console.log("server started at 3030")
})