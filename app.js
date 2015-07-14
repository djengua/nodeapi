var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();


router.get('/', function(req, res){
  res.json({message: 'API ver 1.0'});
});

app.use('/api', router);

app.listen(port);
console.log('Algo magico esta sucediendo en el puerto: '+ port);