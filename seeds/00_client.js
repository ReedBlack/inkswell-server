exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('clientusers').del()
    .then(function () {
      // Inserts seed entries
      return knex('clientusers').insert([{
          id: 1,
          name: "Nick",
          email: "nick@gmail.com",
          password: "123456",
          image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/clientusers/Nick.png",
          budget: "$500",
          placement: "belly",
          size: "medium",
          description: "Think Tupac's Thug Life tattoo, but instead I want 'DJ Munchen' over my belly button in that mega-gothic font...whatever it's called"
        }

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE clientusers_id_seq RESTART WITH 7;")
    })
};