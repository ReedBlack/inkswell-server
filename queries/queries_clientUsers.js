const database = require("../database-connection");

module.exports = {
    list() {
        return database("clientusers").select();
    },
    read(id) {
        return database("clientusers")
            .select()
            .where("client_id", client_id)
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
            .where("client_id", client_id)
            .update(clientusers, "*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("clientusers").where("client_id", client_id).del()
    }
};