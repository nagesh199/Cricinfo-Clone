const express = require("express");
const connection = require("./db");

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.listen(8080,async()=>{
    await connection
    console.log("connected to db")
    console.log("Server started on http://localhost:8008")
})