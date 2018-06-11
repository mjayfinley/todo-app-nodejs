class Task {

  constructor(title, priority, dateCreated){
    this.title = title
    this.priority = priority
    this.dateCreated = dateCreated
    this.dateCompleted = ''
    this.isCompleted = false
  }
}

module.exports = Task
