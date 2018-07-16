const database = require("../database-connection");

module.exports = {
    list() {
        return database("clientusers").select();
    },
    read(id) {
        return database("clientusers")
            .select()
            .where("id", id)
            .first();
    },
    create(clientusers) {
        return database("clientusers")
            .insert(clientusers)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, clientusers) {
        return database("clientusers")
            .where("id", id)
            .update(clientusers, "*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("clientusers").where("id", id).del()
    }
};