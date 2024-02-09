let appetizers=[
    {
        name:'Mozzerella Sticks',
        price: '$8.99',
        vegan: false,
        glutenFree:false
    },
    {
        name:'Chips and Salsa',
        price: '$5.99',
        vegan: false,
        glutenFree: true
    },
    {
        name:'Tacos',
        price: '$8.99',
        vegan: false
    }
]

const getApps= (req,res)=>{
    res.send(appetizers)
}

const getAppById= (req,res)=>{
    res.send(appetizers[req.params.id])
}

module.exports={
    getApps,
    getAppById
}
