const database = require("../database-connection");

module.exports = {
    list() {
        return database("artistusers").select();
    },
    read(artist_id) {
        return database("artistusers")
            .select()
            .where("artist_id", artist_id)
            .first();
    },
    create(artistusers) {
        return database("artistusers")
            .insert(artistusers)
            .returning("*")
            .then(record => record[0]);
    },
    update(artist_id, artistusers) {
        return database("artistusers")
            .where("artist_id", artist_id)
            .update(artistusers, "*")
            .then(record => record[0]);
    },
    delete(artist_id) {
        return database("artistusers").where("artist_id", artist_id).del()
    }
};