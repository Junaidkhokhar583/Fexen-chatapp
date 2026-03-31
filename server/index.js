const webSocket = require("ws");

const wss = new webSocket.Server({ port: 3000 });

let clients = [];

wss.on("connection", (ws) => {
  clients.push(ws);
  console.log("New client created!");

  ws.on("message", (message) => {
    clients.forEach((client) => {
      if (client.readyState === webSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });
  ws.on("close", () => {
    clients = clients.filter((client) => client !== ws);
    console.log("client disconnected!");
  });
});

console.log("Websocket running on port 3000!");
