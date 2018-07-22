const database = require("../database-connection");

module.exports = {
    list() {
        return database("matches").select();
    },
    read(match_id) {
        return database("matches")
            .select()
            .where("match_id", match_id)
            .first();
    },
    create(matches) {
        return database("matches")
            .insert(matches)
            .returning("*")
            .then(record => record[0]);
    },
    update(match_id, matches) {
        return database("matches")
            .where("match_id", match_id)
            .update(matches, "*")
            .then(record => record[0]);
    },
    delete(match_id) {
        return database("matches").where("match_id", match_id).del()
    }
};