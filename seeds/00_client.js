exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('clientusers').del()
    .then(function () {
      // Inserts seed entries
      return knex('clientusers').insert([{
          client_id: 1,
          client_name: "Reed",
          client_email: "black.reed.c@gmail.com",
          client_password: "123456",
          client_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/ClientUsers/Reed.JPG",
          budget: "$650",
          placement: "back shoulder",
          size: "9x9",
          description: "I want a colorful, dreamlike depiction of the mountains"
        },
        {
          client_id: 2,
          client_name: "Dan",
          client_email: "dan@gmail.com",
          client_password: "123456",
          client_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/ClientUsers/Dan.jpg",
          budget: "Dev Money",
          placement: "back",
          size: "whole back",
          description: "I want to get the entire 2009 Coachella lineup tattood on my back"
        },
        {
          client_id: 3,
          client_name: "Brandon",
          client_email: "brandon@gmail.com",
          client_password: "123456",
          client_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/ClientUsers/Brandon.png",
          budget: "$20,000",
          placement: "right arm",
          size: "full sleeve",
          description: "I'm basically going to be printing money within 2 years, so I figured I'd get a sheet of uncut benjamins tatted around my arm"
        },
        {
          client_id: 4,
          client_name: "Nick",
          client_email: "nick@gmail.com",
          client_password: "123456",
          client_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/ClientUsers/Nick.png",
          budget: "$500",
          placement: "belly",
          size: "medium",
          description: "Think Tupac's Thug Life tattoo, but instead I want 'DJ Munchen' over my stomach in comic sans"
        },
        {
          client_id: 5,
          client_name: "Kaitlin",
          client_email: "Kaitlin@gmail.com",
          client_password: "123456",
          client_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/ClientUsers/Kaitlin.png",
          budget: "$1500",
          placement: "full sleeve",
          size: "medium",
          description: "I want a full sleeve depicting the epic battle between Godzilla and Mothra over the partially-destroyed tokyo skyline"
        },
        {
          client_id: 6,
          client_name: "Patrick",
          client_email: "patrick@gmail.com",
          client_password: "123456",
          client_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/ClientUsers/Patrick.png",
          budget: "new dev money",
          placement: "chest/backstrap",
          size: "medium-large",
          description: "My satchel is my soul. My lifeblood. I need a true-to-life tattoo of it strapped around my chest and around my back that is so picture-real, you can almost smell the leather"
        },
        {
          client_id: 7,
          client_name: "Jose",
          client_email: "jose@gmail.com",
          client_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/ClientUsers/Jose.jpeg",
          client_password: "123456",
          budget: "$300",
          placement: "the small of my back",
          size: "medium",
          description: "I'd like a tribal butterfly emerging from a cocoon, symbolizing my transformation from trudging musician to a beautiful software developing butterfly"
        },

      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE clientusers_client_id_seq RESTART WITH 8;")
    })
};