const desserts = [
    { name: 'Cheesecake',
    price: 100,
    description: 'Creamy and indulgent cheesecake on a graham cracker crust, topped with a sweet strawberry compote and whipped cream.', 
    image: 'paste url here'},
    { name: 'Chocolate Lava Cake',
    price: 100,
    description: 'Decadent chocolate cake with a molten chocolate center, served warm and accompanied by a scoop of vanilla ice cream.', 
    image: 'paste url here'},
    {
    name: 'Fresh Fruit Salad',
    price: 200,
    description: 'A refreshing medley of seasonal fruits, such as strawberries, blueberries, pineapple, and grapes, served with a honey-lime dressing.', 
    image: 'paste url here'
    }
  ]

  const getDesserts = (req, res) => {res.send(desserts)}

const getDessert = (req, res) => {res.send(desserts[req.params.id])}


  module.exports = {
    getDesserts,
    getDessert
  }