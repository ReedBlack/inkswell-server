exports.up = function (knex, Promise) {
    return knex.schema.createTable("chat", table => {
        table.increments('id')
        table.integer('match_id')
            .notNullable()
            .references('id')
            .inTable('matches')
            .onDelete('CASCADE')
            .index()
        table.string('chat_client').nullable()
        table.string('chat_artist').nullable()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('chat')
};