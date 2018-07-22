const database = require("../database-connection");

module.exports = {
    list() {
        return database("chat").select();
    },
    read(chat_id) {
        return database("chat")
            .select()
            .where("chat_id", chat_id)
            .first();
    },
    create(chat) {
        return database("chat")
            .insert(chat)
            .returning("*")
            .then(record => record[0]);
    },
    update(chat_id, chat) {
        return database("chat")
            .where("chat_id", chat_id)
            .update(chat, "*")
            .then(record => record[0]);
    },
    delete(chat_id) {
        return database("chat").where("chat_id", chat_id).del()
    }
};