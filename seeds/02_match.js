exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([{
          id: 1,
          client_id: 5,
          artist_id: 3,
        },
        {
          id: 2,
          client_id: 5,
          artist_id: 1,
        },
        {
          id: 3,
          client_id: 5,
          artist_id: 6,
        },
        {
          id: 4,
          client_id: 5,
          artist_id: 7,
        },
        {
          id: 5,
          client_id: 1,
          artist_id: 2,
        },
        {
          id: 6,
          client_id: 2,
          artist_id: 4,
        },
        {
          id: 7,
          client_id: 3,
          artist_id: 5,
        },
        {
          id: 8,
          client_id: 4,
          artist_id: 7,
        },
        {
          id: 9,
          client_id: 6,
          artist_id: 2,
        }

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE matches_id_seq RESTART WITH 10;")
    })
};