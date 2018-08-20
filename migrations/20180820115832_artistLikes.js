exports.up = function (knex, Promise) {
    return knex.schema.createTable("artistLikes", table => {
        table.increments('artistLikes_id').primary()
        table.integer('client_id')
            .notNullable()
            .references('client_id')
            .inTable('clientUsers')
            .onDelete('CASCADE')
            .index()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('artistLikes')
};