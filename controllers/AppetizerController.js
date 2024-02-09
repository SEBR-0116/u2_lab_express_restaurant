const appetizers = [
    { name: "Caprese Salad",
     vegetarian: true, 
     price: 10 },
    { name: "Clam Strips", 
    vegetarian: false, 
    price: 12 },
    { name: "Calamari", 
    vegetarian: false, 
    price: 14 },
  ];

// Get one appetizer based on a query and the Name input
//  -> URL: http://localhost:3001/appetizers?name=Caprese%20Salad
const getAppetizers = (req, res) => {
    // If no name query is used, return all
    //  -> URL: http://localhost:3001/appetizers
    if(req.query.name == null) {
        res.send({ msg: appetizers })
    } else {
        // If name query matches, return that specific appetizer
        //  -> "name" is used bc we're looking to match the "name" key's value for any object in the array
        //  -> could search by "price" key with number value input in the query, or "vegetarian" and true/false input in the query
        res.send(appetizers.filter(appetizer => appetizer.name == req.query.name))
    }
}
// Backup: still searchable via Array # method
//  -> URL: http://localhost:3001/appetizers/0
const getAppetizerById = (req, res) => {
    res.send(appetizers[req.params.id])
}

// const sortByPrice = (req,res) => {
//     const sorted = appetizers.sort((a,b) => {
//         return a.price - b.price
//     })
//     res.send(sorted)
// }

module.exports = {
    getAppetizers,
    getAppetizerById,
    // sortByPrice
}