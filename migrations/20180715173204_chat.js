exports.up = function (knex, Promise) {
    return knex.schema.createTable("chat", table => {
        table.increments('id').primary()
        table.integer('match_id')
            .notNullable()
            .references('id')
            .inTable('matches')
            .onDelete('CASCADE')
            .index()
        table.text('chat_client').nullable()
        table.text('chat_artist').nullable()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('chat')
};