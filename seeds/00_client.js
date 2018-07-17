exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('clientusers').del()
    .then(function () {
      // Inserts seed entries
      return knex('clientusers').insert([{
          id: 1,
          name: "Reed",
          email: "black.reed.c@gmail.com",
          password: "123456",
          image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/clientusers/Reed.png",
          budget: "$400",
          placement: "Tramp Stamp",
          size: "Grapefruit",
          description: "I want a big '</>' right above my ass so skillsfund can see what it's for while they fuck me"
        },
        {
          id: 2,
          name: "Dillon",
          email: "dillon@gmail.com",
          password: "123456",
          image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/clientusers/Dillon.png",
          budget: "$200",
          placement: "chest",
          size: "bong-sized",
          description: "I want to get a bong tattood on my chest. Any bong will do. The more lavish, the better"
        },
        {
          id: 3,
          name: "Dan",
          email: "dan@gmail.com",
          password: "123456",
          image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/clientusers/Dan.png",
          budget: "Dev Money",
          placement: "back",
          size: "whole back",
          description: "I want to get the entire 2014 Coachella lineup tattood on my back"
        },
        {
          id: 4,
          name: "Brandon",
          email: "brandon@gmail.com",
          password: "123456",
          image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/clientusers/Brandon.png",
          budget: "$20,000",
          placement: "right arm",
          size: "full sleeve",
          description: "I'm basically going to be printing money within 2 years, so I figured I'd get a sheet of uncut benjamins tatted around my arm"
        },
        {
          id: 5,
          name: "Nick",
          email: "nick@gmail.com",
          password: "123456",
          image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/clientusers/Nick.png",
          budget: "$500",
          placement: "belly",
          size: "medium",
          description: "Think Tupac's Thug Life tattoo, but instead I want 'DJ Munchen' over my belly button in that mega-gothic font...whatever it's called"
        },
        {
          id: 6,
          name: "Patrick",
          email: "patrick@gmail.com",
          password: "123456",
          image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/clientusers/Patrick.png",
          budget: "new dev money",
          placement: "chest/backstrap",
          size: "medium-large",
          description: "I feel naked without my satchel. If I just got it tatted on, I'd feel more whole in general"
        },

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE clientusers_id_seq RESTART WITH 7;")
    })
};