const appetizers=[
    {
        name:'Guacamole',
        price:4.50,
        spiceoptions:['spicy','mild'],
        tortillaChips: true,
    },
    {
        name:'White cheese dip',
        price:7.99,
        options:['Pico de Gallo','Flour Tortillas']
    },
    {
        name:'Beans Dip',
        price:8.99,
        tortillaChips: true,
    }
    
 
]
const getAppetizers = (req, res) => {res.send(appetizers)}
const getApptById = (req,res)=> {res.send(appetizers[req.params.id])}



module.exports = {
   getAppetizers,
   getApptById
  }