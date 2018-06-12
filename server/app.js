const express = require('express')
const app = express()

const Task = require('./task')

var bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin,X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  next();
})

let tasks = []



app.get('/tasks',function(req,res){
  res.json(tasks)
})

app.post('/tasks',function(req,res){
  let taskID = guid()
  let addTask = new Task(req.body.title,req.body.priority,req.body.dateCreated,req.body.taskID,req.body.dateCompleted,req.body.isCompleted)
  tasks.push(addTask)
  res.json(addTask)
})


//remove w/ guid to select individual tasks
app.delete('/tasks/:taskID',function(req,res){
  let taskID = req.body.taskID
})

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}









app.listen(3000, () => console.log('Example app listening on port 3000!'))
