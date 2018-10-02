var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(function(req, res, next) {
  console.log(req.body);
  next();
});

app.get('/students', function(req, res) {
  res.send('this is the students');
});

app.get('/students/:id', function(req, res) {
  res.send('this is the student with id ' + req.params.id);
});

app.post('/students', function(req, res) {
    res.status(200).send({id:'22',name:'Justan'})
});

app.put('/students/:id', function(req, res) {
    res.status(200).send({name:'newName'})
});

app.patch('/students/:id', function(req, res) {
    res.status(200).send('this is patch')
});

app.delete('/students/:id', function(req, res) {
    res.status(200).send('cya')
});

app.post('/', function(req, res) {
  res.status(200).send('hello this is a post');
});

app.get('/', function(req, res) {
  res.status(200).send('hello world this is 1337');
});

app.listen(1337);
