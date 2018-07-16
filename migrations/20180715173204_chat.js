exports.up = function (knex, Promise) {
    return knex.schema.createTable("chat", table => {
        table.increments('id')
        table.integer('chat_client')
        table.integer('chat_artist')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('chat')
};