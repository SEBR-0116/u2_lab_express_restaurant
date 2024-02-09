const appetizers = [
  {
    name: 'Croquetas',
    description: 'A mixture of mashed potatoes, seasoned ground meat or fish and a creamy b&#233;chamel sauce.',
    price: 10,
    food_photo_url: 'https://blog.amigofoods.com/wp-content/uploads/2022/12/croquetas-cuban-appetizer.jpg',
    restaurant_website: 'https://dash.generalassemb.ly/larson.scott.96/build-your-own-business-website'
  },
  {
    name: 'Empanadas',
    description: 'filled with a savory mixture of ground beef, onions, garlic, peppers, and tomatoes seasoned with a blend of spices such as cumin and oregano.',
    price: 8,
    food_photo_url: 'https://blog.amigofoods.com/wp-content/uploads/2020/12/chicken-empanadas.jpg',
    restaurant_website: 'https://dash.generalassemb.ly/larson.scott.96/build-your-own-business-website'
  },
  {
    name: 'Chicharrones de Cerdo',
    description: 'Fried pork skin giving it a crunchy texture and rich flavor. Seasoned with various spices of garlic, cumin or paprika.',
    price: 10,
    food_photo_url: 'https://blog.amigofoods.com/wp-content/uploads/2023/03/chicharrones-de-cerdo.jpg',
    restaurant_website: 'https://dash.generalassemb.ly/larson.scott.96/build-your-own-business-website'
  },
]

const getAppetizers = (req, res) => {res.send(appetizers)}
const getAppetizersById = (req, res) => {res.send(appetizers[req.params.id])}


module.exports = {
  getAppetizers,
  getAppetizersById,
  getAppetizerByName
}