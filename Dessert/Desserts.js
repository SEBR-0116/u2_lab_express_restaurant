const Desserts = [
    { name: "Creme Burlee",
calories: "800",
price: "9",
glutenFree: true },

{ name: "Chewy Brownies",
calories: "1200",
price: "7",
glutenFree: false },

{ name: "Banana Pudding wo Bananas",
calories: "750",
price: "8",
glutenFree: false },
];


const getDesserts = (req, res) => {
    res.send(Desserts)}

const getDessertsById = (req, res) => {
    res.send(Desserts[req.params.id])}

module.exports = {
    getDesserts,
    getDessertsById
}