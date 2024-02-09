const entrees = [
    { id: 1, name: 'Veggie Burger', price: 9.99, vegan: true, glutenFree: true, kosher: true},
    { id: 2, name: 'Chicken', price: 7.99, vegan: false, glutenFree: true, kosher: true},
    { id: 3, name: 'Mushroom Risotto', price: 12.99, vegan: true, glutenFree: true, kosher: true},
]

const entree = (req, res) => {
    res.send({entrees})
}

const entreeID = (req, res) => {
    const id = parseInt(req.params.id)
    const entree = entrees.find(entree => entree.id === id)
    if (entree) {
        res.send(entree)
    } else {
        res.status(404).send({ message: 'Entree not found' })
    }
}

module.exports = {
    entree,
    entreeID,
}