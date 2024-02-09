////////////// Start Boilerplate //////////////
const express = require('express')
// Add Middleware
const cors = require('cors')
// -> Add Controllers
const appetizerController = require('./controllers/AppetizerController')
const entreeController = require('./controllers/EntreeController')
const dessertController = require('./controllers/DessertController')
// -> End Controllers
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(PORT, () => {
    console.log(`express server working at port ${PORT}`)
})
////////////// End Boilerplate //////////////

// New Terminal: npm run dev

// Routes
app.get('/', (req, res) => {
    res.send('welcome to the express-taurant')
})

// Appetizer Controller Routes
app.get('/appetizers', appetizerController.getAppetizers)
app.get('/appetizers/:id', appetizerController.getAppetizerById)
// app.get('/appetizers/price', appetizerController.sortByPrice)


// Entree Controller Routes
app.get('/entrees', entreeController.getEntrees)
app.get('/entrees/:id', entreeController.getEntreeById)

// Dessert Controller Routes
app.get('/desserts', dessertController.getDesserts)
app.get('/desserts/:id', dessertController.getDessertById)