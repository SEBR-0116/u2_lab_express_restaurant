const entrees = [
    { name: "Steak", 
    price: 21.95,
    vegan: false},
    { name: "Sesame Noodles", 
    price: 18.95,
    vegan: true},
    { name: "Smoked Salmon", 
    price: 19.95,
    vegan: false}
]

const getEntrees = (req, res)=> {
    res.send(entrees)
}

const getEntreeById = (req, res)=> {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getEntreeById
}