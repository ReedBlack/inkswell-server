const database = require("../database-connection");

module.exports = {
    list() {
        return database("chat").select();
    },
    read(id) {
        return database("chat")
            .select()
            .where("id", id)
            .first();
    },
    create(chat) {
        return database("chat")
            .insert(chat)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, chat) {
        return database("chat")
            .where("id", id)
            .update(chat, "*")
            .then(record => record[0]);
    },
    delete(id) {
        return database("chat").where("id", id).del()
    }
};