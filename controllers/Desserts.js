const desserts = [
    { name: "Cream Puffs", 
    price: 10.25,
    vegan: true},
    { name: "Chocolate Eclairs", 
    price: 12.50,
    vegan: false},
    { name: "Apple Pie", 
    price: 11.50,
    vegan: false}
]

const getDesserts = (req, res)=> {
    res.send(desserts)
}

const getDessertById = (req, res)=> {
    res.send(desserts[req.params.id])
}

module.exports = {
    getDesserts,
    getDessertById
}