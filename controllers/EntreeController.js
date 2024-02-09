const entrees = [
    { name: "Stuffed Peppers",
     vegetarian: true, 
     price: 20 },
    { name: "Risotto", 
    vegetarian: true, 
    price: 25 },
    { name: "Salmon", 
    vegetarian: false, 
    price: 35 },
  ];

// Get one entree based on a query and the Name input
//  -> URL: http://localhost:3001/entrees?name=Stuffed%20Peppers
const getEntrees = (req, res) => {
    // If no name query is used, return all
    //   -> URL: http://localhost:3001/entrees
    if(req.query.name == null) {
        res.send({ msg: entrees })
    } else {
        // If name query matches, return that specific entree
        res.send(entrees.filter(entree => entree.name == req.query.name))
    }
}
// Backup: still searchable via Array # method
//  -> URL: http://localhost:3001/entrees/0
const getEntreeById = (req, res) => {
    res.send(entrees[req.params.id])
}

module.exports = {
    getEntrees,
    getEntreeById
}