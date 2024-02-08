const appetizers = [
    {name: "Focaccia",
     description: "Aromatic rosemary-infused focaccia bread, freshly baked to perfection, boasts a golden crust with a tender, airy interior. The scent of fragrant rosemary will enchant your senses as you anticipate each delightful bite.",
     price: 12, 
     vegetarian: true,
     vegan: false,
     glutonFree: false,
     img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/focaccia-the-bear.jpg?q=50&fit=crop&w=943&dpr=1.5"},
    {name: "Welcome Broth",
    description: "Our Hearty Welcome Broth is a fragrant and rich blend of slow-simmered vegetables, aromatic herbs, and savory spices, creating a harmonious symphony of flavors. Each spoonful offers a comforting embrace, reminiscent of a cherished family recipe passed down through generations.",
    price: 14, 
    vegetarian: false,
    vegan: false,
    glutonFree: true,
    img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/the-bear-season-2-welcome-broth.jpg?q=50&fit=crop&w=1500&dpr=1.5"},
    {name: "Bucatini",
    description: "Our bucatini pasta is cooked to perfection, with just the right amount of bite. It's then generously coated in a flavorful pomodoro sauce, crafted from ripe tomatoes, garlic, and aromatic herbs.",
    price: 17, 
    vegetarian: false,
    vegan: false,
    glutonFree: false,
    img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/the-bear-season-2-bucatini.jpg?q=50&fit=crop&w=1500&dpr=1.5"},
  ];

const getAppetizers = (req, res) => {res.send({appetizers})}


const getAppetizerById = (req, res) => {res.send(appetizers[req.params.id])}


module.exports = {
    getAppetizers,
    getAppetizerById
}