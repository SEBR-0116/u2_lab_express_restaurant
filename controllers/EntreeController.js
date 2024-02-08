const entrees = [
    {
        name: 'Pasta alla Carbonara',
        description: 'La carbonara è un primo piatto tipico della tradizione romana preparato con un condimento a base di uova, guanciale e pecorino romano.',
        price: 13.99,
        isVegan: false
    },
    {
        name: 'Risotto ai Funghi',
        description: 'Risotto ai Funghi Porcini realizzato con riso Carnaroli condito a secco con funghi porcini ed aromi lavorati sapientemente nelle campagne teatine seguendo le antiche tradizioni locali.',
        price: 15.99,
        isVegan: true
    },
    {
        name: 'Gnocchi di Patate',
        description: 'Gli Gnocchi di patate sono una preparazione base tipica della cucina italiana; un impasto di patate lesse, uovo e farina, da cui si realizzano bocconcini dalla forma tondeggiante e dalla dimensione variabile',
        price: 10.99,
        isVegan: false
    }
]

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

const getEntreesByID = (req, res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getEntreesByID
}