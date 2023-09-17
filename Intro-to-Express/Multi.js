/*
--> Program to add multiple html pages in server
--> initiate npm using npm init
--> Install Express using <npm install express>
*/

const express=require("express");
const app=express();



app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/about",function(req,res){
    res.sendFile(__dirname + "/Work.html");̀
})

app.listen(3000,function(){
    console.log("Server Established Successfully.........");
});
