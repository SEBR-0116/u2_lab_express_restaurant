const desserts = [
    {
        dish: 'Sachertorte',
        accompaniments: ['Schlag', 'Apricot'],
        price: 16
    },
    {
        dish: 'Marillen Palatschinken',
        accompaniments: ['Apricot'],
        price: 16
    },
    {
        dish: 'Caramelized Kaiserschmarrn',
        accompaniments: ['Blueberry compote'],
        price: 16
    },
    {
        dish: 'Salzburger Nockerl',
        accompaniments: ['Huckleberries'],
        price: 16
    }
]

const getDesserts = (req, res) => {
        res.send(desserts)
}

const getDessertsById = (req,res) => {
    res.send(desserts[req.params.id])
}

const getDessertsByDish = (req, res) => {
    res.send(desserts.filter((dessert) => dessert.dish == req.params.dish))
}

const sortByPrice = (req, res) => {
    const sorted = desserts.toSorted((a, b) => {
        return a.price - b.price
    })
    res.send(sorted)
}

module.exports = {
    getDesserts,
    getDessertsById,
    getDessertsByDish,
    sortByPrice
}