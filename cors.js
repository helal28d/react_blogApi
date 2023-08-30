const cors = require("cors");

module.exports = new cors({
  origin: "*",
  AccessControlAllowOrigin: "*",
});
