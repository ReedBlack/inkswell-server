exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([{
          id: 1,
          chat_client: 3,
          chat_artist: 2,
        },
        {
          id: 2,
          chat_client: 5,
          chat_artist: 1,
        },

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE mixtable_id_seq RESTART WITH 3;")
    })
};