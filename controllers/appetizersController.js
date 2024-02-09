const appetizers = [
    { id: 1, name: 'Spring Rolls', price: 5.99, vegan: true, glutenFree: false, kosher: true},
    { id: 2, name: 'Garlic Bread', price: 8.99, vegan: false, glutenFree: false, kosher: true},
    { id: 3, name: 'Pot Stickers', price: 4.99, vegan: false, glutenFree: true, kosher: true},
  ]


const appetizer = (req, res) => {
  res.send({appetizers})
}

const appetizerID= (req, res) => {
  const id = parseInt(req.params.id)
  const appetizer = appetizers.find(appetizer => appetizer.id === id)
  if (appetizer) {
      res.send(appetizer)
  } else {
      res.status(404).send({ message: 'Appetizer not found' })
  }
}

module.exports = {
  appetizer,
  appetizerID
}