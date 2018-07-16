exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([{
          id: 1,
          client_id: 2,
          artist_id: 3,
          chat_id: 1
        },
        {
          id: 2,
          client_id: 5,
          artist_id: 1,
          chat_id: 2
        },

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE matches_id_seq RESTART WITH 3;")
    })
};