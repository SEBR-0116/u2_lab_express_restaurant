const express = require('express')
const cors = require('cors')

// import controllers
const appetizerController = require('./controllers/AppetizerController')
const entreeController = require('./controllers/EntreeController')
const dessertController = require('./controllers/DessertController')


const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send(`Classic Hello World!`)
})

app.get('/appetizer', appetizerController.getAppetizer)
app.get('/appetizer/:id', appetizerController.getAppetizerById)

app.get('/entree', entreeController.getEntree)
app.get('/entree/:id', entreeController.getEntreeById)

app.get('/dessert', dessertController.getDessert)
app.get('/dessert/:id', dessertController.getDessertById)

app.get('/dessert/:id/name', dessertController.getDessertName)  //try http://localhost:3001/dessert/0/name

