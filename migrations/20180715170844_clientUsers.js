exports.up = function (knex, Promise) {
    return knex.schema.createTable("clientusers", table => {
        table.increments('id')
        table.text('client_name')
        table.text('client_email')
        table.text('client_password')
        table.text('client_image_link')
        table.text('budget')
        table.text('placement')
        table.text('size')
        table.text('description')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('clientusers')
};