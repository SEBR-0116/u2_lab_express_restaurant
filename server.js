//boilerplate code
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001

// Import controllers
const appetizersController = require('./controllers/appetizersController')
const entreesController = require('./controllers/entreesController')
const dessertsController = require('./controllers/dessertsController')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/desserts', dessertsController.dessert) // Fetch all desserts
app.get('/desserts/:id', dessertsController.dessertsID) // Fetch a single dessert by ID
app.get('/entrees', entreesController.entree) // Fetch all entrees
app.get('/entrees/:id', entreesController.entreeID) // Fetch a single entree by ID
app.get('/appetizers', appetizersController.appetizer) // Fetch all appetizers
app.get('/appetizers/:id', appetizersController.appetizerID) // Fetch a single appetizer by ID
app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})