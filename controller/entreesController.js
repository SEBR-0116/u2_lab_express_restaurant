
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











const getEntrees = (req, res) => {
    res.send(entrees)
  }
  const getEntreesById = (req,res) =>{
    res.send(entrees[req.params.id])
}

module.exports = {
   
    getEntrees ,

    getEntreesById,
   
}