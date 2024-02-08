const apps = [
    { name: "Deviled Eggs",
    price: 8.50,
    vegan: false},
    { name: "Stuffed Mushrooms",
    price: 10.75,
    vegan: true},
    { name: "Crab Cakes",
    price: 12.75,
    vegan: false},
]

const getApps = (req, res)=> {
    res.send(apps)
}

const getAppById = (req, res)=> {
    res.send(apps[erq.params.id])
}

module.exports = {
    getApps,
    getAppById
}