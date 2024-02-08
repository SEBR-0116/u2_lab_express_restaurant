const appetizers = [
    {
        name: 'Chopped Salad',
        price: 6.99,
        isVegan: true
    },
    {
        name: 'Focaccia',
        price: 7.99,
        isVegan: false
    },
    {
        name: 'Bruschetta',
        price: 7.99,
        isVegan: false
    }
]

const getAppetizers = (req, res) => {
    if(req.query.name == null) {
        res.send({
            msg: appetizers
        })
    } else {
        res.send(appetizers.filter(appetizer => appetizer.name == req.query.name))
    }
}

const getAppetizersByID = (req, res) => {
    res.send(appetizers[req.params.id])
}

module.exports = {
    getAppetizers,
    getAppetizersByID
}