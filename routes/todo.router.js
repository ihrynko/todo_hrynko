const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/todo.controller");
const TodoService = require("../services/todo.service");
const idRequiredMiddleware = require("../middlewares/id-required.middleware");

const todoController = new TodoController(new TodoService());

router.get("/", (...arg) => todoController.getAllTodo(...arg));
router.get("/:id", idRequiredMiddleware, (...arg) =>
  todoController.getTodo(...arg)
);
router.post("/", (...arg) => todoController.createTodo(...arg));
router.patch("/:id", idRequiredMiddleware, (...arg) =>
  todoController.updateTodo(...arg)
);
router.delete("/:id", idRequiredMiddleware, (...arg) =>
  todoController.deleteTodo(...arg)
);

module.exports = router;
