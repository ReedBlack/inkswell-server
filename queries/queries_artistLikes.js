const database = require("../database-connection");

module.exports = {
    list() {
        return database("artistLikes").select();
    },
    read(artistLikes_id) {
        return database("artistLikes")
            .select()
            .where("artistLikes_id", artistLikes_id)
            .first();
    },
    create(artistLikes) {
        return database("artistLikes")
            .insert(artistLikes)
            .returning("*")
            .then(record => record[0]);
    },
    delete(artistLikes_id) {
        return database("artistLikes").where("artistLikes_id", artistLikes_id).del()
    }
};