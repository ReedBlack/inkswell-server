const express = require("express");
const router = express.Router();
const database = require("../database-connection");
const queries = require("../queries/queries_chat");
const http = require("http");
const socketio = require("socket.io");
const app = express();

const server = http.Server(app);
const websocket = socketio(server);

server.listen(4000, () => console.log("listening on *:4000"));

websocket.on("connection", socket => {
  console.log("A client just joined on", socket.id);
  console.log(socket.emit);
  socket.emit("news", {
    hello: "world"
  });
});

websocket.on("chat", comment => {
  // Save the comment document in the `comments` collection.
  database.collection("chats").insert(comment);

  // The `broadcast` allows us to send to all users but the sender.
  socket.broadcast.emit("chat", comment);
});

router.get("/", (request, response, next) => {
  queries
    .list()
    .then(chats => {
      response.json({
        chats
      });
    })
    .catch(next);
});

router.get("/:chat_id", (request, response, next) => {
  queries
    .read(request.params.chat_id)
    .then(chat => {
      chat
        ? response.json({
            chat
          })
        : response.status(404).json({
            message: "Not found"
          });
    })
    .catch(next);
});

router.post("/", (request, response, next) => {
  queries
    .create(request.body)
    .then(chat => {
      response.status(201).json({
        chat: chat
      });
    })
    .catch(next);
});

router.delete("/:chat_id", (request, response, next) => {
  queries
    .delete(request.params.chat_id)
    .then(() => {
      response.status(204).json({
        deleted: true
      });
    })
    .catch(next);
});

router.put("/:chat_id", (request, response, next) => {
  queries
    .update(request.params.chat_id, request.body)
    .then(chat => {
      response.json({
        chat: chat[0]
      });
    })
    .catch(next);
});

module.exports = router;
