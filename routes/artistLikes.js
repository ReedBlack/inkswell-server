const express = require("express");
const router = express.Router();
const queries = require("../queries/queries_clienLikes");

router.get("/", (request, response, next) => {
    queries
        .list()
        .then(artistLikes => {
            response.json({
                artistLikes
            });
        })
        .catch(next);
});

router.get("/:artistLikes_id", (request, response, next) => {
    queries
        .read(request.params.artistLikes_id)
        .then(artistLikes => {
            artistLikes
                ?
                response.json({
                    artistLikes
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
        .then(artistLikes => {
            response.status(201).json({
                artistLikes: artistLikes
            });
        })
        .catch(next);
});

router.delete("/:artistLikes_id", (request, response, next) => {
    queries
        .delete(request.params.artistLikes_id)
        .then(() => {
            response.status(204).json({
                deleted: true
            });
        })
        .catch(next);
});

router.put("/:artistLikes_id", (request, response, next) => {
    queries
        .update(request.params.artistLikes_id, request.body)
        .then(artistLikes => {
            response.json({
                artistLikes: artistLikes[0]
            });
        })
        .catch(next);
});

module.exports = router;