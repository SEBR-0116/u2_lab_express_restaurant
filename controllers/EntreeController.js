const entrees = [
  { name: "Seven Fishes",
   description: "Dive into a lavish selection of seven exquisite seafood delicacies, expertly prepared to showcase the bounty of the sea. From succulent shrimp to tender calamari, each component of this indulgent dish is a testament to the ocean's treasures.",
   price: 38, 
   vegetarian: false,
   vegan: false,
   glutonFree: false,
   img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/the-bear-seven-fishes.jpg?q=50&fit=crop&w=1500&dpr=1.5"},
  { name: "The T-Bone",
  description: "Indulge in a generous USDA Prime T-Bone steak, hand-selected for its exceptional marbling and flavor. Grilled to your desired level of doneness, each bite reveals a symphony of savory juices and tantalizing tenderness, making every mouthful a true delight.",
  price: 14, 
  vegetarian: false,
  vegan: false,
  glutonFree: true,
  img_path: "https://images.squarespace-cdn.com/content/v1/624fa63d5ba99559345806e6/8a171143-7722-49d5-b614-79bc7aeaedba/EG9_EP29_Grass-fed-T-bone-Creamed-Kale.jpg?format=2500w"},
  { name: "Carbonara",
  description: "Each forkful of al dente spaghetti is lovingly enveloped in a velvety sauce, crafted from creamy egg yolks, aged Parmigiano-Reggiano cheese, and crispy pancetta. The harmonious marriage of these ingredients creates a decadent yet balanced flavor profile that is sure to captivate your senses.",
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