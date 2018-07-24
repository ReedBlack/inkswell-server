exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([{
          chat_id: 1,
          match_id: 2,
          chat_client: null,
          chat_artist: null,
        },
        {
          chat_id: 2,
          match_id: 2,
          chat_client: null,
          chat_artist: null,
        }

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE chat_chat_id_seq RESTART WITH 3;")
    })
};