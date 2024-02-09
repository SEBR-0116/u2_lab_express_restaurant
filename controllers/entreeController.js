const entrees = [
    {
        dish: "Foie Gras Terrine",
        accompaniments: ['Pear Gelée', 'Pear Sorbet', 'Endive', 'Brioche'],
        price: 29
    },
    {
        dish: "Beef Tartare",
        accompaniments: ['Soft Egg', 'Black Burgundy Truffles', 'Horseradish', 'Rye Crisp'],
        price: 28
    },
    {
        dish: "Spätzle",
        accompaniments: ['Black Burgundy Truffle', 'Celery Root'],
        price: 34
    }
]

const getEntrees = (req, res) => {
        res.send(entrees)
}

const getEntreesById = (req,res) => {
    res.send(entree[req.params.id])
}

const getEntreesByDish = (req, res) => {
    res.send(entrees.filter((entree) => entree.dish == req.params.dish))
}

const sortByPrice = (req, res) => {
    const sorted = entrees.toSorted((a, b) => {
        return a.price - b.price
    })
    res.send(sorted)
}

module.exports = {
    getEntrees,
    getEntreesById,
    getEntreesByDish,
    sortByPrice
}