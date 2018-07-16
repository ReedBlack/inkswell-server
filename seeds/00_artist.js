exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('artistUsers').del()
    .then(function () {
      // Inserts seed entries
      return knex('artistUsers').insert([{
          id: 1,
          name: "Eliane Lorey",
          email: "Elaine@gmail.com",
          password: "654321",
          image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine1.jpg",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine2.jpg",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine3.jpg",
          shop: "Urban Element"
        },
        {
          id: 2,
          name: "Brooke Engleheart",
          email: "Brooke@gmail.com",
          password: "654321",
          image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke1.jpg",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke2.jpg",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke3.jpg",
          shop: "Evoke Tattoos"
        },
        {
          id: 3,
          name: "Skyler Espinoza",
          email: "Skyler@gmail.com",
          password: "654321",
          image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Skyler.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Skyler1.png",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Skyler2.png",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Skyler3.png",
          shop: "Certified Tattoo Studios"
        }
      ])
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE mixtable_id_seq RESTART WITH 4;")
    })
};