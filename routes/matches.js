const express = require('express');
const router = express.Router();



const queries = require('../queries/queries_matches');

router.get("/", (request, response, next) => {
    queries.list().then(myMatches => {
        response.json({
            myMatches
        });
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(matches => {
        matches
            ?
            response.json({
                matches
            }) :
            response.status(404).json({
                message: 'Not found'
            })
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(matches => {
        response.status(201).json({
            matches: matches
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
    queries.update(request.params.id, request.body).then(matches => {
        response.json({
            matches: matches[0]
        });
    }).catch(next);
});

module.exports = router;