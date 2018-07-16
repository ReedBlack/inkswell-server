exports.up = function (knex, Promise) {
    return knex.schema.createTable("matches", table => {
        table.increments('id')
        table.integer('client_id')
        table.integer('artist_id')
        table.integer('chat_id')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('matches')
};