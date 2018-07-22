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

router.get('/:match_id/chat', (req, res, next) => {
    database('chat')
        .innerJoin('matches', 'matches.match_id', 'chat.match_id')
        .where('matches.match_id', req.params.match_id)
        .then((rows) => {
            const match_chat = camelizeKeys(rows);
            res.send(match_chat);
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/:match_id", (request, response, next) => {
    queries.read(request.params.match_id).then(matches => {
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

router.delete("/:match_id", (request, response, next) => {
    queries.delete(request.params.match_id).then(() => {
        response.status(204).json({
            deleted: true
        });
    }).catch(next);
});

router.put("/:match_id", (request, response, next) => {
    queries.update(request.params.match_id, request.body).then(matches => {
        response.json({
            matches: matches[0]
        });
    }).catch(next);
});

module.exports = router;