
// var express = require('express');
// var app = express();


// app.set('view engine', 'ejs');
// app.use('views', express.static('views'))


// app.get('/', function(req, res) {
//     res.render('header');
// });


// app.get('/about', function(req, res) {
//     res.render('footer');
// });

// app.listen(3000);
// console.log('3000 is the magic port');







var express= require('express');
var app= express();

app.set('view engine','ejs');
app.get('/:name', function(req,res){
    console.log("I am inside the get / function");
    //res.writeHead(200,{'content-type':'text/html'});
   res.render("index",{name:req.params.name,person:[
       id="siri"
   ]});
    
});


app.listen(3000);