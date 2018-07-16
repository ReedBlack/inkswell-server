const express = require('express');
const router = express.Router();

const queries = require('../queries/queries_artistUsers');

router.get("/", (request, response, next) => {
    queries.list().then(artists => {
        response.json({
            artists
        });
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(artistUsers => {
        artistUsers
            ?
            response.json({
                artistUsers
            }) :
            response.status(404).json({
                message: 'Not found'
            })
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(artistUsers => {
        response.status(201).json({
            artistUsers: artistUsers
        });
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({
            deleted: true
        });
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(artistUsers => {
        response.json({
            artistUsers: artistUsers[0]
        });
    }).catch(next);
});

module.exports = router;