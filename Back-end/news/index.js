const express=require("express")
const app=express()
var cors = require('cors')
const data=require("./data")
var fs = require('fs');
const path = require('path')

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use(cors())

app.use(express.static(path.join(__dirname, 'Front-end/app/build')));

app.get("/teams",(req,res)=>{
 
  fs.readFile('./jsonfiles/db.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(data);
  });

})

app.get("/homepage",(req,res)=>{

  fs.readFile('./jsonfiles/homepage.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(data);
  });

})

app.get("/teamsnews",(req,res)=>{

  fs.readFile('./jsonfiles/news.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(data);
  });

})
app.get("/ranking",(req,res)=>{

  fs.readFile('./jsonfiles/ranking.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(data);
  });

})

app.get("/schedules",(req,res)=>{

  fs.readFile('./jsonfiles/schedules.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    return res.end(data);
  });

})


app.get("/news",(req,res)=>{
    res.end(JSON.stringify(data))
})

app.get("/news/:id",(req,res)=>{
  const {id}=req.params
  data.map(elem=>{
    if(id==elem.id){
        res.end(JSON.stringify(elem))
    }
  })
})



const PORT = process.env.PORT || 3030

app.listen(PORT,()=>{
    console.log("server started at 3030")
})