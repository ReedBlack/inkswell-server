exports.up = function (knex, Promise) {
    return knex.schema.createTable("artistusers", table => {
        table.increments('id')
        table.text('artist_name')
        table.text('artist_email')
        table.text('artist_password')
        table.text('artist_image_link')
        table.text('pic_one')
        table.text('pic_two')
        table.text('pic_three')
        table.text('shop')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('artistusers')
};