const desserts = [
        { id: 1, name: 'Cake', price: 5.99, vegan: true, glutenFree: false, kosher: true},
        { id: 2, name: 'Banana Pudding', price: 10.99, vegan: false, glutenFree: false, kosher: true},
        { id: 3, name: 'Fudge', price: 5.99, vegan: false, glutenFree: true, kosher: true},
]

const dessert = (req, res) => {
        res.send({ desserts })
      }
      
      const dessertsID = (req, res) => {
        const id = parseInt(req.params.id)
        const dessert = desserts.find(dessert => dessert.id === id)
        if (dessert) {
          res.send(dessert)
        } else {
          res.status(404).send({ message: 'Dessert not found' })
        }
      }
      
      module.exports = {
        dessert,
        dessertsID
      }      