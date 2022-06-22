const BasicModel = require("./basic.model");

class TodoModel extends BasicModel {
  id;
  createdOn;
  caption;
  description;
  status;
  priority;

  constructor(caption, description, status, priority, createdOn, id) {
    super();
    this.caption = caption;
    this.description = description;
    this.status = status;
    this.priority = priority;
    this.createdOn = createdOn;
    this.id = id;
  }
}

module.exports = TodoModel;
