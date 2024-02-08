const dessert = 
[
  {
    "id": 1,
    "name": "Ice Cream Sundae",
    "price": 6.99,
    "imageUrl": "https://example.com/images/ice-cream-sundae.jpg",
    "flavors": ["Vanilla", "Chocolate", "Strawberry"],
    "toppings": ["Hot Fudge", "Sprinkles", "Whipped Cream", "Cherry"],
    "dietaryInfo": {
      "isVegan": false,
      "isGlutenFree": true
    }
  },
  {
    "id": 2,
    "name": "Fruit Sorbet",
    "price": 5.50,
    "imageUrl": "https://example.com/images/fruit-sorbet.jpg",
    "flavors": ["Mango", "Lemon", "Raspberry"],
    "toppings": ["Mint Leaves", "Fresh Berries"],
    "dietaryInfo": {
      "isVegan": true,
      "isGlutenFree": true
    }
  },
  {
    "id": 3,
    "name": "Chocolate Lava Cake",
    "price": 7.75,
    "imageUrl": "https://example.com/images/chocolate-lava-cake.jpg",
    "flavors": ["Dark Chocolate", "Milk Chocolate"],
    "toppings": ["Vanilla Ice Cream", "Powdered Sugar"],
    "dietaryInfo": {
      "isVegan": false,
      "isGlutenFree": false
    }
  }
]

const getDessert = (req, res) => {
  res.send(dessert)
}

const getDessertById = (req, res) => {
  res.send(dessert[req.params.id])
}

const getDessertName = (req, res) => {
  // req.params.id returns a string
  // convert `id` from string to number
  const id = parseInt(req.params.id, 10)
  
  // check if id exist in the array
  if (dessert[id]) {
    res.send(dessert[id].name)
  }
}


module.exports = {
  getDessert,
  getDessertById,
  getDessertName
}
