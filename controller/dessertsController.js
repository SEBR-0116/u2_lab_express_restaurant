const desserts = [
    {
        name: 'Tiramisu',
        price: 7.99,
        vegan: false,
        glutenFree: false,
        kosher: false,
        halal: false,
        imageUrl: 'https://www.culinaryhill.com/wp-content/uploads/2021/01/Tiramisu-Culinary-Hill-1200x800-1.jpg'
    },
    {
        name: 'Fruit Tart',
        price: 6.99,
        vegan: true,
        glutenFree: true,
        kosher: false,
        halal: false,
        imageUrl: 'https://www.marcellinaincucina.com/wp-content/uploads/2017/09/mini-fruit-tarts-featured.jpg'
    },
    {
        name: 'Chocolate Cake',
        price: 8.99,
        vegan: false,
        glutenFree: false,
        kosher: false,
        halal: false,
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/chocolate-cake-index-64b83bce2df26.jpg?crop=0.8891145524808891xw:1xh;center,top&resize=1200:*'
    }
];

const getDesserts = (req, res) => {
    res.send(desserts)
}
const getDessertsById = (req,res) =>{
        res.send(desserts[req.params.id])
    }

module.exports = {

    getDesserts,

    getDessertsById
}