const yup = require("yup");
const {
  formatSuccessResponse,
  formatErrorResponse,
} = require("../services/http.service");
const TodoModel = require("../models/todo.model");
const todoService = require("../services/todo.service");

const todoSchema = yup
  .object()
  .noUnknown()
  .shape({
    caption: yup.string().required(),
    description: yup.string().required(),
    status: yup.mixed().oneOf(["pending", "in progress", "done"]).required(),
    priority: yup.mixed().oneOf(["urgent", "normal", "low"]).required(),
  });

const todoUpdateSchema = yup
  .object()
  .noUnknown()
  .shape({
    caption: yup.string().notRequired(),
    description: yup.string().notRequired(),
    status: yup.mixed().oneOf(["pending", "in progress", "done"]).notRequired(),
    priority: yup.mixed().oneOf(["urgent", "normal", "low"]).notRequired(),
  });

module.exports.getAllTodo = (req, res) => {
  const allTodo = req.db.JSON();
  return formatSuccessResponse(res, { allTodo });
};

module.exports.getTodo = (req, res) => {
  const { id } = req.params;
  const todo = todoService.getTodo(id);
  return formatSuccessResponse(res, todo);
};

module.exports.createTodo = async (req, res) => {
  try {
    await todoSchema.validate(req.body);
    const { caption, description, status, priority } = req.body;
    const model = new TodoModel(caption, description, status, priority);
    console.log(model);
    const data = model.save();
    return formatSuccessResponse(res, data);
  } catch (error) {
    console.log(error);
    return formatErrorResponse(res, error);
  }
};

module.exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await todoUpdateSchema.validate(req.body);
    const update = req.body;
    const todo = todoService.updateTodo(id, update);
    return formatSuccessResponse(res, todo);
  } catch (error) {
    console.log(error);
    return formatErrorResponse(res, error);
  }
};

module.exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todo = todoService.deleteTodo(id);
  return formatSuccessResponse(res, todo);
};
