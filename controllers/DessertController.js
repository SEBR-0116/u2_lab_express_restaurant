const desserts = [
  { name: "The Bear Honey Bun",
   price: 10, 
   vegetarian: true,
   vegan: false,
   glutonFree: false,
   img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/the-bear-honeybun.jpg?q=50&fit=crop&w=1500&dpr=1.5"},
  { name: "'The Michael' Cannoli",
  price: 12, 
  vegetarian: true,
  vegan: false,
  glutonFree: false,
  img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/the-bear-mikey-cannoli.jpg?q=50&fit=crop&w=1500&dpr=1.5"},
  { name: "Copenhagen Sundae",
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