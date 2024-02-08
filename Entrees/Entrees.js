const entrees = [
    {
        ordernum: 6,
        name: "Oishi Roll",
        ingredients: "shimp, avocado, cream cheese, cram, eel sauce",
        price: 14.00,
        comes_with_side: true,
        side_choices: "soup & salad",
        vegan: false
    },
    {
        ordernum: 7,
        name: "Black Dragon Roll",
        ingredients: "shimp, avocado, cucumber, eel, seaweed",
        price: 15.00,
        comes_with_side: true,
        side_choices: "soup & salad",
        vegan: false
    },
    {
        ordernum: 8,
        name: "Veggilicious",
        ingredients: "avocado, cucumber, carrot, beans",
        price: 12.00,
        comes_with_side: true,
        side_choices: "soup & salad",
        vegan: true
    },
    {
        ordernum: 9,
        name: "Aroma Roll",
        ingredients: "salmon, crab, avocado, cream cheese, special sauce",
        price: 12.00,
        comes_with_side: false,
        vegan: false
    },
    {
        ordernum: 10,
        name: "Crystal Roll",
        ingredients: "shrimp, salmon, spinach, cream cheese, sweet chili sauce",
        price: 13.00,
        comes_with_side: true,
        side_choices: "soup & salad",
        vegan: false
    },
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