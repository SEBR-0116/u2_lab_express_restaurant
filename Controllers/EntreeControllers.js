const entrees = [
    {name: "Lemon Herb Shrimp and Rice Bowl",
    price: 7.99, 
    type: "rice bowl",
    isVegan: false,
    isSpicy: false,
    containsSeafood: true},
    {name: "Red Curry Shrimp with Coconut", 
    price: 7.99, 
    type: "bowl",
    isVegan: false,
    isSpicy: true,
    containsSeafood: true},
    {name: "Tangy Shrimp Cilantro", 
    price: 9.99, 
    type: "ramen",
    isVegan: false,
    isSpicy: true,
    containsSeafood: true},
    {name: "Slurp Up Cilantro", 
    price: 9.99, 
    type: "ramen",
    isVegan: false,
    isSpicy: true,
    containsSeafood: true}
]


const getEntrees = (req, res) => {res.send (entrees)}

const getEntreeById = (req, res) => {res.send(entrees[req.params.id])}

module.exports = {
    getEntrees,
    getEntreeById
}