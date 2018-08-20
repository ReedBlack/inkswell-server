const express = require("express");
const router = express.Router();
const database = require("../database-connection");

const queries = require("../queries/queries_clientUsers");
const {
    camelizeKeys,
    decamelizeKeys
} = require("humps");

router.get("/", (request, response, next) => {
    queries
        .list()
        .then(clients => {
            response.json({
                clients
            });
        })
        .catch(next);
});

router.get("/:client_id/matches", (req, res, next) => {
    database("matches")
        .innerJoin("clientusers", "clientusers.client_id", "matches.client_id")
        .innerJoin("artistusers", "artistusers.artist_id", "matches.artist_id")
        .where("clientusers.client_id", req.params.client_id)
        .then(rows => {
            const client_matches = camelizeKeys(rows);
            res.send(client_matches);
        })
        .catch(err => {
            next(err);
        });
});

router.get('/:client_id/clientLikes', (req, res, next) => {
    database('clientLikes')
        .innerJoin('clientUsers', 'clientUsers.client_id', 'clientLikes.client_id')
        .where('clientUsers.client_id', req.params.client_id)
        .then((rows) => {
            const client_likes = camelizeKeys(rows);
            res.send(client_likes);
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/:client_id", (request, response, next) => {
    queries
        .read(request.params.client_id)
        .then(clientusers => {
            clientusers
                ?
                response.json({
                    clientusers
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
        .then(clientusers => {
            response.status(201).json({
                clientusers: clientusers
            });
        })
        .catch(next);
});

router.delete("/:client_id", (request, response, next) => {
    queries
        .delete(request.params.client_id)
        .then(() => {
            response.status(204).json({
                deleted: true
            });
        })
        .catch(next);
});

router.put("/:client_id", (request, response, next) => {
    queries
        .update(request.params.client_id, request.body)
        .then(clientusers => {
            response.json({
                clientusers: clientusers[0]
            });
        })
        .catch(next);
});

module.exports = router;