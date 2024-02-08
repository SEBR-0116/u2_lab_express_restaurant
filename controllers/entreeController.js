const entree = [
  {
    name: 'Vaca Frita',
    description: 'A hearty, flavorful dish made with meat, or shredded beef, onions, tomatoes, peppers and garlic.',
    price: 17,
    food_photo_url: 'https://blog.amigofoods.com/wp-content/uploads/2020/09/vaca-frita-dish.jpg',
    restaurant_website: 'https://dash.generalassemb.ly/larson.scott.96/build-your-own-business-website'
  },
  {
    name: 'Cuban Sandwich',
    description: 'layers sliced ham, marinated pork, swiss cheese, pickles, and mustard between a special signature bread.',
    price: 14,
    food_photo_url: 'https://blog.amigofoods.com/wp-content/uploads/2021/01/cuban-sandwich.jpg',
    restaurant_website: 'https://dash.generalassemb.ly/larson.scott.96/build-your-own-business-website'
  },
  {
    name: 'Ropa Vieja',
    description: 'Made with tender shredded beef that is slow-cooked with a savory blend of tomatoes, onions, bell peppers, and spices.',
    price: 16,
    food_photo_url: 'https://blog.amigofoods.com/wp-content/uploads/2020/05/ropa-vieja-national-dish-of-cuba.jpg',
    restaurant_website: 'https://dash.generalassemb.ly/larson.scott.96/build-your-own-business-website'
  },
]

const getEntree = (req, res) => {res.send(entree)}
const getEntreeById = (req, res) => {res.send(entree[req.params.id])}

module.exports = {
  getEntree,
  getEntreeById
}