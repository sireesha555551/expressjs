// var express=require('express');
// var app=express();
// app.get('/',function(req,res){
//     res.send('hello world');
// });
// app.listen(3000);


// var express=require('express');
// var app=express();
// app.get('/home',function(req,res){
//     res.send('hello world');
// });
// app.listen(3000);


// var express=require('express');
// var app=express();
// app.get('/hello',function(req,res){
//     res.send('hello hai i am siri');
// });
// app.post('/hello',function(req,res){
//     console.log(req.data)
//     res.send("you are calling the post method '/hello'");
// });
// app.listen(3000);






var express=require('express');
var app=express();
app.all('*', (req, res)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'accept, Content-Type, Authorization');
})
var router=require('./routing.js');
app.use('/routing',router);
app.listen(3000);

