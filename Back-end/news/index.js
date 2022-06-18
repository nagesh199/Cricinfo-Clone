const express=require("express")
const app=express()
var cors = require('cors')
const data=require("./data")

app.use(cors())
app.get("/",(req,res)=>{
    res.end(JSON.stringify(data))
})

app.get("/:id",(req,res)=>{
  const {id}=req.params
  data.map(elem=>{
    if(id==elem.id){
        res.end(JSON.stringify(elem))
    }
  })

})
app.listen(3030,()=>{
    console.log("server started at 3030")
})