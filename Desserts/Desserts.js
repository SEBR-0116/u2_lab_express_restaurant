const desserts = [
    {
        ordernum: 11,
        name: "Vanilla Icecream",
        price: 5.00,
        housemade: false
    },
    {
        ordernum: 12,
        name: "Chocolate Icecream",
        price: 5.00,
        housemade: false
    },
    {
        ordernum: 13,
        name: "Match Icecream",
        price: 6.00,
        housemade: true
    },
    {
        ordernum: 14,
        name: "Mochi Icecream",
        price: 7.00,
        flavors: "vanilla, chocolate, matche, taro",
        housemade: true
    },
    
]

const getDesserts = (req, res) => {
    res.send(desserts)
}

const getDessertsById = (req, res) => {
    res.send(desserts[req.params.id])
}


module.exports = {
    getDesserts,
    getDessertsById
}