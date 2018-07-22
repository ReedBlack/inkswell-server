exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('matches').del()
    .then(function () {
      // Inserts seed entries
      return knex('matches').insert([{
          match_id: 1,
          client_id: 5,
          artist_id: 3,
        },
        {
          match_id: 2,
          client_id: 5,
          artist_id: 1,
        },
        {
          match_id: 3,
          client_id: 5,
          artist_id: 6,
        },
        {
          match_id: 4,
          client_id: 5,
          artist_id: 7,
        },
        {
          match_id: 5,
          client_id: 1,
          artist_id: 2,
        },
        {
          match_id: 6,
          client_id: 2,
          artist_id: 4,
        },
        {
          match_id: 7,
          client_id: 3,
          artist_id: 5,
        },
        {
          match_id: 8,
          client_id: 4,
          artist_id: 7,
        },
        {
          match_id: 9,
          client_id: 6,
          artist_id: 2,
        }

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE matches_match_id_seq RESTART WITH 10;")
    })
};