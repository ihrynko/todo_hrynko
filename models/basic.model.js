const db = require("../db");
const { v4 } = require("uuid");

class BasicModel {
  save() {
    const id = v4();
    const createdOn = new Date().toLocaleString();
    const data = { ...this, id, createdOn };
    console.log("data", data);
    db.set(id, data);
    return data;
  }

  update(update) {
    const data = { ...this, ...update };
    db.set(this.id, data);
    return data;
  }
}

module.exports = BasicModel;
