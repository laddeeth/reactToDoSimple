export default class Todo {
  id;
  task;
  isDone;

  constructor(id, task, isDone) {
    this.id = id;
    this.task = task;
    this.isDone = isDone;
  }
}
