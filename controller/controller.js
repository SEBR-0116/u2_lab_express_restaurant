const appetizers = [
    {
        name: 'Bruschetta',
        price: 8.99,
        vegan: true,
        glutenFree: false,
        kosher: false,
        halal: false,
        imageUrl: 'https://natashaskitchen.com/wp-content/uploads/2020/07/Tomato-Bruschetta-Recipe-7.jpg'
    },
    {
        name: 'Salad',
        price: 10.99,
        vegan: true,
        glutenFree: true,
        kosher: true,
        halal: true,
        imageUrl: 'https://hellolittlehome.com/wp-content/uploads/2022/08/garden-salad-recipe-2-500x500.jpg'
    },
    {
        name: 'Stuffed Mushrooms',
        price: 9.99,
        vegan: false,
        glutenFree: true,
        kosher: false,
        halal: false,
        imageUrl: 'https://cdn.loveandlemons.com/wp-content/uploads/2019/12/stuffed-mushrooms-2.jpg'
    }
];

const entrees = [
    {
        name: 'Pasta Primavera',
        price: 15.99,
        vegan: true,
        glutenFree: false,
        kosher: false,
        halal: false,
        imageUrl: 'https://dfwblobstorage.blob.core.windows.net/images/Recipe/One-Pot-Shrimp-Pasta-Primavera-wc.jpg'
    },
    {
        name: 'Grilled Salmon',
        price: 18.99,
        vegan: false,
        glutenFree: true,
        kosher: false,
        halal: true,
        imageUrl: 'https://www.thespruceeats.com/thmb/HgM2h42z1HGEcSWkWk5CgAjDDpQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-grill-salmon-2216658-hero-01-a9c948f8a238400ebaafc0caf509c7fa.jpg'
    },
    {
        name: 'Chicken Broccoli',
        price: 17.99,
        vegan: false,
        glutenFree: false,
        kosher: false,
        halal: false,
        imageUrl: 'https://twoplaidaprons.com/wp-content/uploads/2022/07/chicken-and-broccoli-on-plate-thumbnail.jpg'
    }
];

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




const getAppetizers = (req, res) => {
    res.send(appetizers)
  }

const getEntrees = (req, res) => {
    res.send(entrees)
  }

const getDesserts = (req, res) => {
    res.send(desserts)
  }
const getAppetizersById = (req,res) =>{
    res.send(appetizers[req.params.id])
}
const getEntreesById = (req,res) =>{
    res.send(entrees[req.params.id])
}

const getDessertsById = (req,res) =>{
    res.send(desserts[req.params.id])
}

module.exports = {
    getAppetizers ,
    getEntrees ,
    getDesserts,
    getAppetizersById,
    getEntreesById,
    getDessertsById
}