const yup = require("yup");
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
module.exports = { todoSchema, todoUpdateSchema };
