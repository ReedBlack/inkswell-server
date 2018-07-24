exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("artistusers")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("artistusers").insert([{
          artist_id: 1,
          artist_name: "Elaine Lorey",
          artist_email: "Elaine@gmail.com",
          artist_password: "654321",
          artist_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine1.png",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine2.png",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Elaine3.png",
          shop: "Urban Element"
        },
        {
          artist_id: 2,
          artist_name: "Brooke Engleheart",
          artist_email: "Brooke@gmail.com",
          artist_password: "654321",
          artist_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke1.png",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke2.png",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Brooke3.png",
          shop: "Evoke Tattoos"
        },
        {
          artist_id: 3,
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
          artist_id: 4,
          artist_name: "Rebecca Ashley",
          artist_email: "Rebecca@gmail.com",
          artist_password: "654321",
          artist_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/rebecca.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/rebecca1.png",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/rebecca2.png",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/rebecca3.png",
          shop: "Auspicious Tattoo"
        },
        {
          artist_id: 5,
          artist_name: "Fish",
          artist_email: "Fish@gmail.com",
          artist_password: "654321",
          artist_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/fish.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/fish2.png",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/fish1.png",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/fish3.png",
          shop: "Th'ink Tank"
        },
        {
          artist_id: 6,
          artist_name: "Morgan Alynn",
          artist_email: "Morgan@gmail.com",
          artist_password: "654321",
          artist_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Morgan.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Morgan1.png",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Morgan2.png",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Morgan3.png",
          shop: "Claw and Talon Tattoo"
        },
        {
          artist_id: 7,
          artist_name: "Josh Wrede",
          artist_email: "Josh@gmail.com",
          artist_password: "654321",
          artist_image_link: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Josh.png",
          pic_one: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Josh1.png",
          pic_two: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Josh2.png",
          pic_three: "https://s3-ap-southeast-1.amazonaws.com/mixtap-mixes/inkswell/Josh3.png",
          shop: "Til Death Tattoo"
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE artistusers_artist_id_seq RESTART WITH 8;");
    });
};