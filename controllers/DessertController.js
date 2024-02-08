const desserts = [
    {
        name: 'Tiramisu',
        price: 8.99,
        isVegan: false
    },
    {
        name: 'Gelato',
        price: 4.99,
        isVegan: false
    },
    {
        name: 'Cannoli',
        price: 2.99,
        isVegan: false
    }
]

const getDesserts = (req, res) => {
    if(req.query.name == null) {
        res.send({
            msg: desserts
        })
    } else {
        res.send(desserts.filter(dessert => dessert.name == req.query.name))
    }
}

const getDessertsByID = (req, res) => {
    res.send(desserts[req.params.id])
}

module.exports = {
    getDesserts,
    getDessertsByID
}