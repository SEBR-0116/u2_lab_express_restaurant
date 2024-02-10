const desserts = [
    {
        name: "Fried Twinkies",
        price: "$7.50"
    },
    {
        name: "Brownie",
        price: "$7.50"
    },
    {
        name: "Fried Oreos",
        price: "$7.50"
    }
]

const getDesserts = (req, res) => {
    res.send(`${desserts}`)
}

const getDessertById = (req, res) => {
    res.send(desserts[req.params.id])
}

module.exports = {
    getDesserts,
    getDessertById
}