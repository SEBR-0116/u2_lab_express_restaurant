const express = require('express')
const cors = require('cors')
const appController = require('./controllers/AppControl')
const dessertController = require('./controllers/DessertControl')
const entreeController = require('./controllers/EntreeControl')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes go here

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

app.get('/', (req, res) => {
    res.send({ msg: 'Server Running' })
  })

//index (list) route
app.get('/appetizers', appController.getApps)
app.get('/dessert', dessertController.getDesserts)
app.get('/entree', entreeController.getEntrees)


//detail (show) route
app.get('/cats/:id', appController.getApp)
app.get('/dogs/:id', dessertController.getDessert)
app.get('/dogs/:id', entreeController.getEntree)
