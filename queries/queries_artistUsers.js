const database = require("../database-connection");

module.exports = {
    list() {
        return database("artistusers").select();
    },
    read(id) {
        return database("artistusers")
            .select()
            .where("id", id)
            .first();
    },
    create(artistusers) {
        return database("artistusers")
            .insert(artistusers)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, artistusers) {
        return database("artistusers")
            .where("id", id)
            .update(artistusers, "*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("artistusers").where("id", id).del()
    }
};