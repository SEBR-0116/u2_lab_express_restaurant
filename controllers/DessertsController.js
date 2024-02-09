
const desserts=[
    {
        name:'Cheesecake',
        price:6.99,
        options:['Pumpkin','New York','Strawberry','Key Lime','White Chocolate','Dark Chocolate'],
        addOnOptions:['Strawberry jelly','Blueberry jelly','Chocolate','Cajeta','Nutela']
        
    },
    {
        name:'Chocolate Cake',
        price:5.99,
        fillingOptions:['Straberry','Vanilla Cream','Chocolate','Nutela',]


    },
    {
        name:'Créme brûlé',
        price:6.99,
    },
    {
        name:'Flan',
        price:6.99,
    }
]



const getDesserts = (req, res) => {res.send(desserts)}
const getDessById = (req,res)=> {res.send(desserts[req.params.id])}




module.exports = {
    getDesserts,
    getDessById

}