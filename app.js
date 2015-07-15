var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//base setup t
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/mongotest');
//var Hello = require('./models/hello');

//------
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var router = express.Router();


router.get('/', function(req, res){
  res.json({message: 'API ver 1.0'});
});

//routes

/*
router.route('/hello')
  .post(function(req, res){
    var hello = new Hello();
    hello.name = req.body.name;
    hello.msg = req.body.msg;

    hello.save(function(err){
      if(err)
        res.send(err);
      res.json({message: 'Hello ' + hello.name});
    });
  })
  .get(function(req,res){
    Hello.find(function(err, hellos){
      if(err)
        res.send(err);
      res.json(hellos);
    });
  });
*/
app.use('/api', router);

app.listen(port);
console.log('Algo magico esta sucediendo en el puerto: '+ port);
