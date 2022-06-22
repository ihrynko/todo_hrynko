const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/todo.controller");
const TodoService = require("../services/todo.service");
const idRequiredMiddleware = require("../middlewares/id-required.middleware");

const todoController = new TodoController(new TodoService());

router.get("/", (...args) => todoController.getAllTodo(...args));
router.get("/:id", idRequiredMiddleware, (...args) =>
  todoController.getTodo(...args)
);
router.post("/", (...args) => todoController.createTodo(...args));
router.patch("/:id", idRequiredMiddleware, (...args) =>
  todoController.updateTodo(...args)
);
router.delete("/:id", idRequiredMiddleware, (...args) =>
  todoController.deleteTodo(...args)
);

module.exports = router;
