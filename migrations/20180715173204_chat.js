exports.up = function (knex, Promise) {
    return knex.schema.createTable("chat", table => {
        table.increments('id')
        table.integer('match_id')
            .notNullable()
            .references('id')
            .inTable('matches')
            .onDelete('CASCADE')
            .index()
        table.text('chat_client')
        table.text('chat_artist')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('chat')
};