const appetizers = [
    {
        name: 'Chopped Salad',
        description: "Gli ingredienti sono tutte le verdure tipiche dell'estate: peperoni, melanzane, zucchine e pomodorini, un'esplosione di colori e sapori.",
        price: 6.99,
        isVegan: true
    },
    {
        name: 'Focaccia',
        description: "La focaccia è un pane basso, composto da un impasto di farina, acqua, sale e lievito, che può essere cotto sia al forno che alla brace",
        price: 7.99,
        isVegan: false
    },
    {
        name: 'Bruschetta',
        description: "La bruschetta è un piatto tradizionalmente italiano, nato dalla necessità di consumare il pane avanzato, oggi considerato un famoso antipasto che accompagna le tavole italiane, dai buffet alle grigliate tra amici.",
        price: 7.99,
        isVegan: false
    },
    {
        name: 'Roasted Bell Peppers',
        description: "Peperoni rossi e gialli, arrostiti lentamente, infusi con olio d'oliva extravergine e aglio fresco, una delizia mediterranea per il palato.",
        price: 7.99,
        isVegan: true
    }
]

const getAppetizers = (req, res) => {
    if(req.query.name == null) {
        res.send({
            msg: appetizers
        })
    } 
    if (req.query.name != null){
        res.send(appetizers.filter(appetizer => appetizer.name.toLowerCase().includes(req.query.name.toLowerCase())))
    }
}

const getAppetizersByID = (req, res) => {
    res.send(appetizers[req.params.id])
}

module.exports = {
    getAppetizers,
    getAppetizersByID
}