const express = require('express')
const cors = require('cors')
const Appetizer = require('./Appetizer/Appetizers.js')
const Dessert = require('./Dessert/Desserts.js')
const Entree = require('./Entree/Entrees.js')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Hello!")
  })

app.get('/appetizers', Appetizer.getAppetizers)
app.get('/appertizers/:id', Appetizer.getAppetizers)

app.get('/desserts', Dessert.getDesserts)
app.get('/desserts/:id', Dessert.getDesserts)

app.get('/entrees', Entree.getEntrees)
app.get('/desserts/:id', Entree.getEntrees)