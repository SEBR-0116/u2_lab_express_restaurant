const appetizer =
  [
    {
      "id": 1,
      "name": "Bruschetta",
      "price": 8.50,
      "imageUrl": "https://www.allrecipes.com/thmb/QSsjryxShEx1L6o0HLer1Nn4jwA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/54165-balsamic-bruschetta-DDMFS-4x3-e2b55b5ca39b4c1783e524a2461634ea.jpg",
      "vegan": true,
    },
    {
      "id": 2,
      "name": "Chicken Wings",
      "price": 9.99,
      "imageUrl": "https://tastesbetterfromscratch.com/wp-content/uploads/2014/09/Baked-Chicken-Wings-3.jpg",
      "vegan": false,
    },
    {
      "id": 3,
      "name": "Stuffed Mushrooms",
      "price": 7.25,
      "imageUrl": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2021/11/Stuffed-Mushrooms-main-1-1.jpg",
      "vegan": false,
    }
  ];

const getAppetizer = (req, res) => {
  res.send(appetizer)
}

const getAppetizerById = (req, res) => {
  res.send(appetizer[req.params.id])
}

module.exports = {
  getAppetizer,
  getAppetizerById
}
