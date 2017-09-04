var express = require('express');
var app = express();
var port = 2000;

app.listen(port);
console.log('Server started');


var router = express.Router();
app.use('/', router);
app.use(function (req, res, next) {
    res.header("Content-Type", 'application/json');
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Content-Type');
    res.header('Access-Control-Allow-Methods','GET','POST','PUT','DELETE','OPTIONS');
    next();
});

router.get('/', function (req, res) {
    res.send('im the home page!');
});

router.get('/data', function (req, res) {
    res.json([{ "id": 1, "name": "Mymm", "city": "Pantano do Sul" },
    { "id": 2, "name": "Skyble", "city": "Guilmaro" },
    { "id": 3, "name": "Tagfeed", "city": "Gnosjö" },
    { "id": 4, "name": "Realcube", "city": "Jrashen" },
    { "id": 5, "name": "Bluejam", "city": "Zhangjiawo" },
    { "id": 6, "name": "Jayo", "city": "Obonoma" },
    { "id": 7, "name": "Cogidoo", "city": "Sungsang" },
    { "id": 8, "name": "Avavee", "city": "Diawara" },
    { "id": 9, "name": "Tagtune", "city": "Monywa" },
    { "id": 10, "name": "Centimia", "city": "Retkovci" }]);
});
