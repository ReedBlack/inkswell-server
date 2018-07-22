exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('chat').del()
    .then(function () {
      // Inserts seed entries
      return knex('chat').insert([{
          chat_id: 1,
          match_id: 2,
          chat_client: "yo!",
          chat_artist: null,
        },
        {
          chat_id: 2,
          match_id: 2,
          chat_client: null,
          chat_artist: "you'z wants tats, brah?",
        },
        {
          chat_id: 3,
          match_id: 2,
          chat_client: "yesh",
          chat_artist: null,
        },
        {
          chat_id: 4,
          match_id: 2,
          chat_client: null,
          chat_artist: "I gotchu fam",
        },

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE chat_chat_id_seq RESTART WITH 5;")
    })
};