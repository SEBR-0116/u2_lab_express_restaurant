const desserts = [
  { name: "The Bear Honey Bun",
   description: "Soft buns, drizzled with golden honey and cinnamon, served warm with vanilla ice cream. A sweet and indulgent treat to satisfy your dessert cravings.",
   price: 10, 
   vegetarian: true,
   vegan: false,
   glutonFree: false,
   img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/the-bear-honeybun.jpg?q=50&fit=crop&w=1500&dpr=1.5"},
  { name: "'The Michael' Cannoli",
  description: "Crispy shells filled with creamy ricotta, topped with chocolate shavings. A perfect blend of sweetness and texture.",
  price: 12, 
  vegetarian: true,
  vegan: false,
  glutonFree: false,
  img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/the-bear-mikey-cannoli.jpg?q=50&fit=crop&w=1500&dpr=1.5"},
  { name: "Copenhagen Sundae",
  description: "A decadent blend of creamy vanilla ice cream, drizzled with rich chocolate syrup, and topped with crunchy caramelized almonds.",
  price: 14, 
  vegetarian: true,
  vegan: false,
  glutonFree: true,
  img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/copenhagen-sundae-the-bear.jpg?q=50&fit=crop&w=1500&dpr=1.5"},
];

const getDesserts = (req, res) => {res.send({desserts})}


const getDessertById = (req, res) => {res.send(desserts[req.params.id])}


module.exports = {
    getDesserts,
    getDessertById
}