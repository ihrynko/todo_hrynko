const db = require("../db");
const TodoModel = require("../models/todo.model");

class TodoService {
  getTodo(id) {
    const { caption, description, status, priority, createdOn } = db.get(id);
    return new TodoModel(caption, description, status, priority, createdOn, id);
  }
  updateTodo(id, update) {
    const todo = this.getTodo(id);
    todo.update(update);
    return todo;
  }
  deleteTodo(id) {
    const { caption, description, createdOn, status, priority } = db.delete(id);
    return new TodoModel(caption, description, createdOn, status, priority, id);
  }
}

module.exports = new TodoService();
