exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("artistusers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("artistusers").insert([{
          id: 1,
          artist_name: "Eliane Lorey",
          artist_email: "Elaine@gmail.com",
          artist_password: "654321",
          artist_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine1.png",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine2.png",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine3.png",
          shop: "Urban Element"
        },
        {
          id: 2,
          artist_name: "Brooke Engleheart",
          artist_email: "Brooke@gmail.com",
          artist_password: "654321",
          artist_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke1.jpg",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke2.jpg",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke3.jpg",
          shop: "Evoke Tattoos"
        },
        {
          id: 3,
          artist_name: "Skyler Espinoza",
          artist_email: "Skyler@gmail.com",
          artist_password: "654321",
          artist_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Skyler.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Skyler1.png",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Skyler2.png",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Skyler3.png",
          shop: "Certified Tattoo Studios"
        },
        {
          id: 4,
          artist_name: "Rebecca Ashley aka Black Huntress",
          artist_email: "Rebecca@gmail.com",
          artist_password: "654321",
          artist_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/rebecca.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/rebecca1.png",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/rebecca2.png",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/rebecca3.png",
          shop: "Auspicious Tattoo"
        },
        {
          id: 5,
          artist_name: "Fish",
          artist_email: "Fish@gmail.com",
          artist_password: "654321",
          artist_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/fish.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/fish1.png",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/fish2.png",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/fish3.png",
          shop: "Th'ink Tank"
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE artistusers_id_seq RESTART WITH 4;");
    });
};