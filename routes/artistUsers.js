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

router.get('/:artist_id/matches', (req, res, next) => {
    queries.read('matches')
        .innerJoin('artistusers', 'artistusers.artist_id', 'matches.artist_id')
        .where('matches.artist_id', req.params.artist_id)
        .then((rows) => {
            const artist_matches = camelizeKeys(rows);
            res.send(artist_matches);
        })
        .catch((err) => {
            next(err);
        });
});

router.get("/:artist_id", (request, response, next) => {
    queries.read(request.params.artist_id).then(artistusers => {
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

router.delete("/:artist_id", (request, response, next) => {
    queries.delete(request.params.artist_id).then(() => {
        response.status(204).json({
            deleted: true
        });
    }).catch(next);
});

router.put("/:artist_id", (request, response, next) => {
    queries.update(request.params.artist_id, request.body).then(artistusers => {
        response.json({
            artistusers: artistusers[0]
        });
    }).catch(next);
});

module.exports = router;