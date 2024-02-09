const entrees = [
    { name: 'Classic Burger',
    price: 100,
    description: 'A juicy beef patty served on a toasted brioche bun with lettuce, tomato, onion, pickles, and your choice of cheese. Accompanied by crispy fries on the side.', 
    image: 'caprese.jpeg'},
    {
    name: 'Grilled Salmon Fillet',
    price: 200,
    description: 'Fresh Atlantic salmon fillet seasoned with herbs and grilled to perfection. Served with roasted vegetables and a lemon-dill sauce.', 
    image: 'paste url here',
    name: 'Portobello Mushroom Risotto',
    price: 200,
    description: 'Creamy Arborio rice cooked with savory vegetable broth and topped with grilled portobello mushrooms, Parmesan cheese, and fresh parsley.', 
    image: 'paste url here'
    }
  ]

  const getEntrees = (req, res) => {res.send(entrees)}

const getEntree = (req, res) => {res.send(entrees[req.params.id])}


  module.exports = {
    getEntrees,
    getEntree
  }