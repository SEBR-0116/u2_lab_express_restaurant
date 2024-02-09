const entrees=[
    {
        name:'Tacos',
        Price:4.99,
        meatOptions:['Chiken','Beef','Shrimp','Fish'],
        Options:[
            {   beans:true,
                rice:true,
                sourCream: false,
                cheese: false,
                salsa:['Green','Red']
            }
        ],  
    },
    {
        name:'Burritos',
        Price:12.99,
        meatOptions:['Chiken','Beef','Shrimp'],
        Options:[
            {   beans:true,
                rice:true,
                sourCream: false,
                cheese: false
            }
        ], 
    },
    {
        name:'Quesadilla',
        Price:7.99,
        meatOptions:['Chiken','Beef','Shrimp'],
        Options:[
            {   beans:true,
                rice:true,
                sourCream: false,
                cheese: false
            }
        ]
    },
    {
        name:'Pozole',
        Price:9.99,
        meatOptions:['Chiken','Beef'],
        options:['Red','Green','White']
    }
]
//const getEntrees = (req, res) => {res.send(entrees)}

const getEntrees = (req, res) => {
    if(req.query.name == null) {
        res.send({
            msg: entrees
        })
    } 
    if (req.query.name != null){
        res.send(entrees.filter(entree => entree.name.toLowerCase().includes(req.query.name.toLowerCase())))
    }
}

const getEntreesById = (req,res)=> {res.send(entrees[req.params.id])}



module.exports = {
    getEntrees,
    getEntreesById,
}