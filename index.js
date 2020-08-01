const app = require("./app");
const server = require("http").createServer(app);
const env = require("./environments/env");
 let io = require("./src/helpers/socket").sock(server);
  io.on("connect", () => {
    console.log('connect');
  });
async function serverApp() {
  //await mongooseConnect();

  await server.listen(env.portLocal);
 
  console.log("server running");
}

//init server async
serverApp();
