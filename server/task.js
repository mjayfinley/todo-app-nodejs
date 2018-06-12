class Task {

  constructor(title, priority, dateCreated){
    this.title = title
    this.priority = priority
    this.dateCreated = dateCreated
    this.taskID = 0
    this.dateCompleted = ''
    this.isCompleted = false
  }
}

module.exports = Task
