let desserts=[
    {
        name:'Molten Lava Cake',
        price: '$9.99',
        vegan: false,
        glutenFree:false
    },
    {
        name:'Ice Cream Scoop',
        price: '$5.99',
        vegan: false,
        glutenFree: true
    },
    {
        name:'Cookie Skillet',
        price: '$10.99',
        vegan: false
    }
]

const getDesserts= (req,res)=>{
    res.send(desserts)
}

const getDessertById= (req,res)=>{
    res.send(desserts[req.params.id])
}

module.exports={
    getDesserts,
    getDessertById
}
