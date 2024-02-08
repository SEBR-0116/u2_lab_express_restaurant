const entrees = [
    {
        name: 'Pasta alla Carbonara',
        price: 13.99,
        isVegan: false
    },
    {
        name: 'Risotto ai Funghi',
        price: 15.99,
        isVegan: false
    },
    {
        name: 'Gnocchi di Patate',
        price: 10.99,
        isVegan: false
    }
]

const getEntrees = (req, res) => {
    if(req.query.name == null) {
        res.send({
            msg: entrees
        })
    } else {
        res.send(entrees.filter(entree => entree.name == req.query.name))
    }
}

const getEntreesByID = (req, res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getEntreesByID
}