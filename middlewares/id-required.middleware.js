const { formatErrorResponse } = require("../services/http.service");

module.exports = (req, res) => {
  const { id } = req.params;
  if (!id) {
    return formatErrorResponse(res, { message: "Id is required" });
  }
};
