let entrees=[
    {
        name:'Filet Mignon',
        price: '$24.99',
        vegan: false,
        glutenFree:false
    },
    {
        name:'Smoked Salmon',
        price: '$17.99',
        vegan: false,
        glutenFree: true
    },
    {
        name:'CheeseBurger',
        price: '$11.99',
        vegan: false
    }
]

const getEntrees= (req,res)=>{
    res.send(entrees)
}

const getEntreeById= (req,res)=>{
    res.send(entrees[req.params.id])
}

module.exports={
    getEntrees,
    getEntreeById
}
