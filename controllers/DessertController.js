const desserts = [
    {
        name: 'Tiramisu',
        description: "Il tradizionale dolce italiano, stratificato con savoiardi imbevuti di caffè, mascarpone cremoso e cacao in polvere, un'esperienza indulgente per i sensi.",
        price: 8.99,
        isVegan: false
    },
    {
        name: 'Gelato',
        description: "Gusti freschi e genuini, preparati con ingredienti di prima qualità, un'esplosione di sapori autentici in ogni boccone.",
        price: 4.99,
        isVegan: false
    },
    {
        name: 'Cannoli',
        description: "Gusci croccanti di cannolo, riempiti con una deliziosa crema di ricotta dolce, arricchiti con scorze d'arancia candite e gocce di cioccolato, una prelibatezza tradizionale siciliana da non perdere.",
        price: 2.99,
        isVegan: false
    }
]

const getDesserts = (req, res) => {    
    if(req.query.name == null) {
        res.send({
            msg: desserts
        })
    } 
    if (req.query.name != null){
        res.send(desserts.filter(dessert => dessert.name.toLowerCase().includes(req.query.name.toLowerCase())))
    }
}

const getDessertsByID = (req, res) => {
    res.send(desserts[req.params.id])
}

module.exports = {
    getDesserts,
    getDessertsByID
}