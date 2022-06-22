const { formatErrorResponse } = require("../services/http.service");

module.exports = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return formatErrorResponse(res, { message: "Id is required" });
  }
  next();
};
