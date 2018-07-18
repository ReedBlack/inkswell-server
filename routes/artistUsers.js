const express = require('express');
const router = express.Router();

const queries = require('../queries/queries_artistUsers');
const {
    camelizeKeys,
    decamelizeKeys
} = require('humps');


router.get("/", (request, response, next) => {
    queries.list().then(artists => {
        response.json({
            artists
        });
    }).catch(next);
});

router.get('/:id/matches', (req, res, next) => {
    queries.read('matches')
        .innerJoin('artistusers', 'artistusers.id', 'matches.artist_id')
        .where('matches.artist_id', req.params.id)
        .then((rows) => {
            const artist_matches = camelizeKeys(rows);
            res.send(artist_matches);
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(artistusers => {
        artistusers
            ?
            response.json({
                artistusers
            }) :
            response.status(404).json({
                message: 'Not found'
            })
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(artistusers => {
        response.status(201).json({
            artistusers: artistusers
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
    queries.update(request.params.id, request.body).then(artistusers => {
        response.json({
            artistusers: artistusers[0]
        });
    }).catch(next);
});

module.exports = router;