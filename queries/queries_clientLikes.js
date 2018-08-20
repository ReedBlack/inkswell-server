const database = require("../database-connection");

module.exports = {
    list() {
        return database("clientLikes").select();
    },
    read(clientLikes_id) {
        return database("clientLikes")
            .select()
            .where("clientLikes_id", clientLikes_id)
            .first();
    },
    create(clientLikes) {
        return database("clientLikes")
            .insert(clientLikes)
            .returning("*")
            .then(record => record[0]);
    },
    delete(clientLikes_id) {
        return database("clientLikes").where("clientLikes_id", clientLikes_id).del()
    }
};