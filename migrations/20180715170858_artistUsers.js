exports.up = function (knex, Promise) {
    return knex.schema.createTable("artistUsers", table => {
        table.increments('id')
        table.text('email')
        table.text('password')
        table.text('image_link')
        table.text('pic_one')
        table.text('pic_two')
        table.text('pic_three')
        table.text('shop')
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('artistUsers')
};