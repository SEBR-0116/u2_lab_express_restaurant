const appetizers = [
    {name: "Focaccia",
     price: 12, 
     vegetarian: true,
     vegan: false,
     glutonFree: false,
     img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/focaccia-the-bear.jpg?q=50&fit=crop&w=943&dpr=1.5"},
    {name: "Welcome Broth",
    price: 14, 
    vegetarian: false,
    vegan: false,
    glutonFree: true,
    img_path: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/the-bear-season-2-welcome-broth.jpg?q=50&fit=crop&w=1500&dpr=1.5"},
    {name: "Bucatini",
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