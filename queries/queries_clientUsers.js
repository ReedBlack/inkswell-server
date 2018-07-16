const database = require("./database-connection");

module.exports = {
    list() {
        return database("clientUsers").select();
    },
    read(id) {
        return database("clientUsers")
            .select()
            .where("id", id)
            .first();
    },
    create(clientUsers) {
        return database("clientUsers")
            .insert(clientUsers)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, clientUsers) {
        return database("clientUsers")
            .where("id", id)
            .update(clientUsers, "*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("clientUsers").where("id", id).del()
    }
};