const apps = [
    {name: "Crispy Sriracha Spring Rolls",
    price: 3.99, 
    isVegan: false,
    isSpicy: true},
    {name: "Sweet Gingered Chicken Wings", 
    price: 5.99, 
    isVegan: false,
    isSpicy: false},
    {name: "Garlic Bread Mini Muffins", 
    price: 2.99, 
    isVegan: true,
    isSpicy: false},
]


const getApps = (req, res) => {res.send (apps)}

const getAppById = (req, res) => {res.send(apps[req.params.id])}

module.exports = {
    getApps,
    getAppById
}