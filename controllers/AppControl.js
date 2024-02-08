const apps = [
    { name: 'Caprese Salad',
    price: 100,
    description: 'Slices of ripe tomatoes and fresh mozzarella cheese drizzled with balsamic glaze and garnished with basil leaves. Light and refreshing.', 
    image: 'caprese.jpeg'},
    {
    name: 'Crispy Calamari',
    price: 200,
    description: 'Tender rings of calamari lightly battered and fried until golden brown. Served with marinara sauce and lemon wedges for a zesty kick.', 
    image: 'paste url here'},
    {
    name: 'Spinach and Artichoke Dip',
    price: 200,
    description: 'Creamy spinach and artichoke dip served warm with crispy tortilla chips for dipping. A classic crowd-pleaser.', 
    image: 'paste url here'
    }
  ]

const getApps = (req, res) => {res.send(apps)}

const getApp = (req, res) => {res.send(apps[req.params.id])}

  module.exports = {
    getApps,
    getApp
  }