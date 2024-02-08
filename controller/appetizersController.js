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







const getAppetizers = (req, res) => {
    res.send(appetizers)
  }



const getAppetizersById = (req,res) =>{
    res.send(appetizers[req.params.id])
}



module.exports = {
    getAppetizers,
    getAppetizersById
  }