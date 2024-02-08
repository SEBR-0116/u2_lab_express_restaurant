const entrees = [
  { name: "Seven Fishes",
   price: 38, 
   vegetarian: false,
   vegan: false,
   glutonFree: false,
   img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/the-bear-seven-fishes.jpg?q=50&fit=crop&w=1500&dpr=1.5"},
  { name: "The T-Bone",
  price: 14, 
  vegetarian: false,
  vegan: false,
  glutonFree: true,
  img_path: "https://images.squarespace-cdn.com/content/v1/624fa63d5ba99559345806e6/8a171143-7722-49d5-b614-79bc7aeaedba/EG9_EP29_Grass-fed-T-bone-Creamed-Kale.jpg?format=2500w"},
  { name: "Carbonara",
  price: 32, 
  vegetarian: false,
  vegan: false,
  glutonFree: false,
  img_path: "https://www.recipetineats.com/wp-content/uploads/2023/01/Carbonara_6a.jpg"},
];

const getEntrees = (req, res) => {res.send({entrees})}


const getEntreeById = (req, res) => {res.send(entrees[req.params.id])}


module.exports = {
    getEntrees,
    getEntreeById
}