exports.up = function (knex, Promise) {
    return knex.schema.createTable("clientusers", table => {
        table.increments('id')
        table.text('name')
        table.text('email')
        table.text('password')
        table.text('image_link')
        table.text('budget')
        table.text('placement')
        table.text('size')
        table.text('description')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('clientusers')
};