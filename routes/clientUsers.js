const express = require('express');
const router = express.Router();

const queries = require('../queries/queries_clientusers');

router.get("/", (request, response, next) => {
    queries.list().then(clients => {
        response.json({
            clients
        });
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(clientusers => {
        clientusers
            ?
            response.json({
                clientusers
            }) :
            response.status(404).json({
                message: 'Not found'
            })
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(clientusers => {
        response.status(201).json({
            clientusers: clientusers
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
    queries.update(request.params.id, request.body).then(clientusers => {
        response.json({
            clientusers: clientusers[0]
        });
    }).catch(next);
});

module.exports = router;