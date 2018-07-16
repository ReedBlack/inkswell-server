const database = require("./database-connection");

module.exports = {
    list() {
        return database("matches").select();
    },
    read(id) {
        return database("matches")
            .select()
            .where("id", id)
            .first();
    },
    create(matches) {
        return database("matches")
            .insert(matches)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, matches) {
        return database("matches")
            .where("id", id)
            .update(matches, "*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("matches").where("id", id).del()
    }
};