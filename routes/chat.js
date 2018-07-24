const express = require("express");
const router = express.Router();

const queries = require("../queries/queries_chat");




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
        ?
        response.json({
          chat
        }) :
        response.status(404).json({
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