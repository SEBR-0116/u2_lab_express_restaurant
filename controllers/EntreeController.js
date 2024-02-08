const entree = [
  {
    "id": 1,
    "name": "Quinoa Salad",
    "price": 11.50,
    "imageUrl": "https://example.com/images/quinoa-salad.jpg",
    "ingredients": ["Quinoa", "Tomatoes", "Cucumbers", "Feta Cheese", "Olives"],
    "sides": ["Garlic Bread", "Soup of the Day"],
    "dietaryInfo": {
      "isVegan": false,
      "isGlutenFree": true,
      "isOrganic": true
    }
  },
  {
    "id": 2,
    "name": "Ribeye Steak",
    "price": 22.99,
    "imageUrl": "https://example.com/images/ribeye-steak.jpg",
    "ingredients": ["Ribeye Cut", "Salt", "Black Pepper", "Thyme"],
    "sides": ["Mashed Potatoes", "Steamed Asparagus"],
    "dietaryInfo": {
      "isVegan": false,
      "isGlutenFree": true,
      "isOrganic": false
    }
  },
  {
    "id": 3,
    "name": "Pasta Primavera",
    "price": 14.25,
    "imageUrl": "https://example.com/images/pasta-primavera.jpg",
    "ingredients": ["Pasta", "Bell Peppers", "Zucchini", "Carrots", "Parmesan"],
    "sides": ["Caesar Salad", "Garlic Bread"],
    "dietaryInfo": {
      "isVegan": false,
      "isGlutenFree": false,
      "isOrganic": false
    }
  }
]

const getEntree = (req, res) => {
  res.send(entree)
}

const getEntreeById = (req, res) => {
  res.send(entree[req.params.id])
}

module.exports = {
  getEntree,
  getEntreeById
}
  

