const express = require('express')
const app = express()

const Task = require('./task')

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept");
  next();
})

let tasks = []



app.get('/tasks',function(req,res){
  res.json(tasks)
})

app.post('/tasks',function(req,res){
  let addTask = new Task(req.body.title,req.body.priority,req.body.dateCreated,req.body.dateCompleted,req.body.isCompleted)
  tasks.push(addTask)
  res.json(tasks)
})

app.delete('/tasks',function(req,res){
  res.json(tasks)
})









app.listen(3000, () => console.log('Example app listening on port 3000!'))
