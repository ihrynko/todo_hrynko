const JSONdb = require("simple-json-db");
const db = new JSONdb("./db/todo.json");
module.exports = db;
