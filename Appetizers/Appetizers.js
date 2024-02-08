const appetizers = [
    {
        ordernum: 1,
        name: "Edamame",
        ingredients: "soybean",
        price: 5.00,
        vegan: true
    },
    {
        ordernum: 2,
        name: "gyoza",
        ingredients: "dumplings",
        price: 7.00,
        vegan: false
    },
    {
        ordernum: 3,
        name: "Soft Shell Crab",
        ingredients: "soft shell crabs & special sauce",
        price: 10.00,
        vegan: false
    },
    {
        ordernum: 4,
        name: "Sweet Potato Tempura",
        ingredients: "sweet potato",
        price: 6.00,
        vegan: true
    },
    {
        ordernum: 5,
        name: "Shumai",
        ingredients: "seafood dumplings",
        price: 8.00,
        vegan: false
    }
]

const getAppetizers = (req, res) => {
    res.send(appetizers)
}

const getAppById = (req, res) => {
    res.send(appetizers[req.params.id])
}


module.exports = {
    getAppetizers,
    getAppById,
}