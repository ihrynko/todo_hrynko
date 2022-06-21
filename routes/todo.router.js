const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");
const idRequiredMiddleware = require('../middlewares/id-required.middleware')

router.get("/", todoController.getAllTodo);
router.get("/:id", idRequiredMiddleware, todoController.getTodo);
router.post("/", todoController.createTodo);
router.patch("/:id", idRequiredMiddleware, todoController.updateTodo);
router.delete("/:id", idRequiredMiddleware, todoController.deleteTodo);

module.exports = router;
