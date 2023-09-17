/*
--> Program to Calculate Sum of two numbers
--> initiate npm using npm init
--> Install Express using <npm install express>
--> Install body-parser using <npm install body-parser>
*/


const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
})
app.listen(3000,function(){
    console.log("Server Established Successfully.........");
});

app.get("/calculate",function(req,res){
    res.sendFile(__dirname + "/main.html");
})

app.post("/",function(req,res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("Result: " + result);

});
