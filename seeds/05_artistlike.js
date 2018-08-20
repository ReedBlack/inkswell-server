exports.seed = function (knex, Promise) {
  return knex('artistLikes').del()
    .then(function () {
      return knex('artistLikes').insert([{
          artistLikes_id: 1,
          client_id: 1,
        },
        {
          artistLikes_id: 2,
          client_id: 4,
        },
        {
          artistLikes_id: 2,
          client_id: 6,
        }
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE artistLikes_artistLikes_id_seq RESTART WITH 3;")
    })
};