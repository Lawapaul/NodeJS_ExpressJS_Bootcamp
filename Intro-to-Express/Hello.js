/*
--> Program to print hello world on server
--> initiate npm using npm init
--> Install Express using <npm install express>
*/

const express=require("express");
const app = express();


app.get("/",function(req,res){
    res.send("Hello World");
})
app.listen(3000,function(){
    console.log("Server Established Successfully.........");
});

