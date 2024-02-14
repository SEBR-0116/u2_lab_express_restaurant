const entrees = [
    {
        name: "Wings(10ct)",
        price: "$17.00"
    },
    {
        name: "The Larry Bird Sandwich",
        price: "$14.00"
    },
    {
        name: "Buffalo Chicken Salad",
        price: "$14.50"
    }
]

const getEntrees = (req, res) => {
    res.send(entrees)
}

const getEntreeById = (req, res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getEntreeById
}