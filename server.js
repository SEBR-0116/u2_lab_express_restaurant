const express = require('express')
const cors = require('cors')
// links the controller file to this file
const appetizerController = require('./controllers/appetizerController')
const entreeController = require('./controllers/entreeController')
const dessertController = require('./controllers/dessertController')

const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => console.log(`Serving up at our Restaurant ${PORT}`))

///////////////////////////////////////////////////////////////////////////////////////////////////


// appetizers
app.get('/appetizers', appetizerController.getAppetizers)
app.get('/appetizers/:id', appetizerController.getAppetizersById)
// entrees
app.get('/entree', entreeController.getEntree)
app.get('/entree/:id', entreeController.getEntreeById)
// desserts
app.get('/desserts', dessertController.getDessert)
app.get('/desserts/:id', dessertController.getDessertById)