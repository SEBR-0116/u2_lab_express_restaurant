const express = require('express')

// Middleware will be required here
const cors = require('cors')
const appetizerController = require('./controllers/appetizerControllers.js')
const dessertController = require('./controllers/dessertControllers.js')
const entreeController = require('./controllers/entreeControllers.js')

const PORT = process.env.PORT || 3001
const app = express()

// Middleware will be used here
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes go here
app.get('/', (request, response) => {
    response.send({ msg: 'Server Running' })
  })

app.get('/appetizers', appetizerController.getAppetizerSalad)
app.get('/appetizers/salad', appetizerController.getAppetizerSalad)
app.get('/appetizers/soup', appetizerController.getAppetizerSoup)

app.get('/desserts', dessertController.getDesserts)
app.get('/desserts/tiramisu', dessertController.getDessertTiramisu)
app.get('/desserts/cannoli', dessertController.getDessertCannoli)
app.get('/desserts/panna-cotta', dessertController.getDessertPannaCotta)

app.get('/entrees', entreeController.getEntrees)


app.get(`/*`, (req, res) => {
  res.send(`404 error, file not found!`)
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))