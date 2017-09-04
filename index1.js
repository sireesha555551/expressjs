var express= require('express');
var app= express();
app.get('/', function(req,res){
    console.log("I am inside the get / function");
    res.writeHead(200,{'content-type':'text/html'});
    res.end("<h1>Hello This is just get request</h1>");
});

app.get('/home', function(req,res){
    console.log("I am inside the home function");
    res.writeHead(200,{'content-type':'text/html'});
    res.end("<h1>You are in HOME page</h1>");
    
})

app.listen(3000);
