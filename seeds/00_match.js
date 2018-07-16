exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([{
          id: 1,
          artist_id: 3,
          user_id: 2,
        },
        {
          id: 2,
          user_id: 5,
          artist_id: 1,
        },

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE mixtable_id_seq RESTART WITH 3;")
    })
};