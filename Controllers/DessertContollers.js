const desserts = [
    {name: "Snickerdoodle Blondies",
    price: 3.99, 
    isVegan: false,
    isSweet: true,
    quantity: 3},
    {name: "Strawberry Crunch Poke Cake", 
    price: 3.99, 
    isVegan: false,
    isSweet: true,
    quantity: 1},
    {name: "Lemon-Blueberry Mini Cheesecake Cupcakes", 
    price: 5.99, 
    isVegan: true,
    isSweet: true,
    quantity: 3},
    {name: "Lemon-Blueberry Cheesecake Bars", 
    price: 3.99, 
    isVegan: false,
    isSweet: true,
    quantity: 4,
    image: "lemon-blueberry-cheesecake-bars-horizontal-1675455803-641de21360d26.jpg"}
]


const getDesserts = (req, res) => {res.send (desserts)}

const getDessertById = (req, res) => {res.send(desserts[req.params.id])}

module.exports = {
    getDesserts,
    getDessertById
}