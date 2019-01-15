const mongoose = require("mongoose");
const config = require("config");

mongoose.Promise = Promise;

mongoose.connection.on("connected", () => {
  console.log("Connection Established");
});

mongoose.connection.on("reconnected", () => {
  console.log("Connection Reestablished");
});

mongoose.connection.on("disconnected", () => {
  console.log("Connection Disconnected");
});

mongoose.connection.on("close", () => {
  console.log("Connection Closed");
});

mongoose.connection.on("error", error => {
  console.log("ERROR: " + error);
});

const run = async () => {
  await mongoose.connect(
    "mongodb://localhost:27017/" + config.get("app.dbName"),
    {
      autoReconnect: true,
      useNewUrlParser: true,
      reconnectTries: 1000000,
      reconnectInterval: 3000
    }
  );
};

run().catch(error => console.error(error));
