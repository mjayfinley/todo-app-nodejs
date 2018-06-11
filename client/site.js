let addTaskBtn = document.getElementById("addTaskBtn")
let taskInput = document.getElementById("taskInput")
let priorityInput = document.getElementById("priorityInput")
let dateInput = document.getElementById("dateInput")

let getTasksBtn = document.getElementById("getTasksBtn")

function getTask() {
  fetch('http://localhost:3000/tasks')
  .then(function(response){
    return response.json()
  }).then(function(json){
    taskList.innerHTML = ''
    Object.keys(json).forEach(function(item){
      let liItem = `<li class="listItems">
                      <p>Task: ${json[item].title}</p>
                      <p>Priority: ${json[item].priority}</p>
                      <p>Date: ${json[item].dateCreated}</p>
                    </li>`
      taskList.innerHTML += liItem
    })
  })
}


function addTask() {
  let taskTitle = taskInput.value
  let taskPriority = priorityInput.value
  let taskDate = dateInput.value

  fetch('http://localhost:3000/tasks',{
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      title : taskTitle,
      priority: taskPriority,
      dateCreated: taskDate,
      isCompleted: false,
      dateCompleted: 'never'
    })
  }).then(function(response){
    return response.text()
  }).then(function(text){
    getTask()

  })
  taskInput.value = ''
  priorityInput.value = ''
  dateInput.value = ''
}


function deleteTask(){
  fetch('http://localhost:3000/tasks', {
    method: 'DELETE',
    headers:{
      'Content-Type': 'application/json'
    },
  }).then(function(response){
    return response.json()
  }).then(function(json){
      getTask()
  })
}




addTaskBtn.addEventListener('click',function(){
  addTask()
})

getTasksBtn.addEventListener('click',function(){
  getTask()
})
