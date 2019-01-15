const config = require("config");
const API_PATH = "/api";
const routes = [];
routes.push({
  path: API_PATH + "/books",
  method: "GET",
  handler: (request, h) => {
    return "Hello Book";
  },
  config: {
    tags: ["api"]
  }
});

module.exports = routes;
