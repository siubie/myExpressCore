const Hapi = require("hapi");
const config = require("config");

const server = new Hapi.Server({
  host: config.get("app.host"),
  port: config.get("app.port")
});

const routes = require("./routes");

// attach routes here
server.route(routes);

// register plugins
// const registerPlugins = async () => {
//   try {
//     await server.register(plugins);
//   } catch (error) {
//     logger.error(error, "Failed to register hapi plugins");
//     throw error;
//   }
// };

// registerPlugins();

// export modules
module.exports = server;
