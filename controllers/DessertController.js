const desserts = [
    { name: "Apple Pie",
     vegetarian: true, 
     price: 6 },
    { name: "Cherry Pie", 
    vegetarian: true, 
    price: 6 },
    { name: "Blueberry Pie", 
    vegetarian: true, 
    price: 6 },
  ];

// Get one dessert based on a query and the Name input
//  -> URL: http://localhost:3001/desserts?name=Apple%20Pie
const getDesserts = (req, res) => {
    // If no name query is used, return all
    //  -> URL: http://localhost:3001/desserts
    if(req.query.name == null) {
        res.send({ msg: desserts })
    } else {
        // If name query matches, return that specific dessert
        res.send(desserts.filter(dessert => dessert.name == req.query.name))
    }
}
// Backup: still searchable via Array # (0-2) method
//  -> URL: http://localhost:3001/desserts/0
const getDessertById = (req, res) => {
    res.send(desserts[req.params.id])
}

module.exports = {
    getDesserts,
    getDessertById
}