const apps = [
    {
        name: "Fried Pickles",
        price: "$8.50"
    },
    {
        name: "Holy Macaroni",
        price: "$10.00"
    },
    {
        name: "Buffalo Bites",
        price: "$9.50"
    }
]

const getApps = (req, res) => {
    res.send(apps)
}

const getAppById = (req, res) => {
    res.send(apps[req.params.id])
}

module.exports = {
    getApps,
    getAppById
}