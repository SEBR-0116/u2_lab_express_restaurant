const Appetizers = [
    { name: "Chicken Nanchos",
      calories: "600",
      price: "13.50",
      vegan: false },

    { name: "Hot Wings",
    calories: "850",
    price: "12",
    vegan: false },

    { name: "Chicken Lettuce Wraps",
    calories: "420",
    price: "15",
    vegan: false},
];

const getAppetizers = (req, res) => {
    res.send(Appetizers)}


const getAppetizerById = (req, res) => {
    res.send(Appetizers[req.params.id])}


    module.exports = {
        getAppetizers,
        getAppetizerById
    }

