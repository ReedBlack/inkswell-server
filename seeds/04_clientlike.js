exports.seed = function (knex, Promise) {
  return knex('clientLikes').del()
    .then(function () {
      return knex('clientLikes').insert([{
          clientLikes_id: 1,
          artist_id: 2,
        },
        {
          clientLikes_id: 2,
          artist_id: 4,
        },
        {
          clientLikes_id: 2,
          artist_id: 5,
        }

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE clientLikes_clientLikes_id_seq RESTART WITH 3;")
    })
};