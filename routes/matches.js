const express = require('express');
const router = express.Router();
const database = require("../database-connection");


const queries = require('../queries/queries_matches');
const {
    camelizeKeys,
    decamelizeKeys
} = require('humps');

router.get("/", (request, response, next) => {
    queries.list().then(myMatches => {
        response.json({
            myMatches
        });
    }).catch(next);
});

router.get('/:id/chat', (req, res, next) => {
    database('chat')
        .leftJoin('matches', 'matches.id', 'chat.match_id')
        .where('matches.id', req.params.id)
        .then((rows) => {
            const match_chat = camelizeKeys(rows);
            res.send(match_chat);
        })
        .catch((err) => {
            next(err);
        });
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