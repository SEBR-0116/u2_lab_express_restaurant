const dessert = [
  {
    name: 'Flan',
    description: 'Eggs, milk, sugar and vanilla, flavored with a baked and then carmalized with a carribian Rum.',
    price: 12,
    food_photo_url: 'https://blog.amigofoods.com/wp-content/uploads/2021/01/cuban-flan.jpg',
    restaurant_website: 'https://dash.generalassemb.ly/larson.scott.96/build-your-own-business-website'
  },
  {
    name: 'Turron',
    description: 'This nougat confection is typically made from a mixture of honey, sugar, egg whites and nuts such as almonds or peanuts.',
    price: 8,
    food_photo_url: 'https://blog.amigofoods.com/wp-content/uploads/2020/10/cuban-turron.jpg',
    restaurant_website: 'https://dash.generalassemb.ly/larson.scott.96/build-your-own-business-website'
  },
  {
    name: 'Tres Leches',
    description: 'Light sponge cake soaked in three different kinds of milk :condensed milk, evaporated milk, and thick cream.',
    price: 14,
    food_photo_url: 'https://blog.amigofoods.com/wp-content/uploads/2020/10/cuban-tres-leches-cake.jpg',
    restaurant_website: 'https://dash.generalassemb.ly/larson.scott.96/build-your-own-business-website'
  },
]

const getDessert = (req, res) => {res.send(dessert)}
const getDessertById = (req, res) => {res.send(dessert[req.params.id])}

module.exports = {
  getDessert,
  getDessertById
}