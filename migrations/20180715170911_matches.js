exports.up = function (knex, Promise) {
    return knex.schema.createTable("matches", table => {
        table.increments('match_id')
        table.integer('client_id')
            .notNullable()
            .references('client_id')
            .inTable('clientusers')
            .onDelete('CASCADE')
            .index()
        table.integer('artist_id')
            .notNullable()
            .references('artist_id')
            .inTable('artistusers')
            .onDelete('CASCADE')
            .index()

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('matches')
};