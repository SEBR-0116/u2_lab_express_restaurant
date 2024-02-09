const express = require('express')
const cors =require('cors')
const appetizerControllers = require('./controllers/AppetizersController.js')
const entreesControllers = require('./controllers/EntreesController.js')
const dessertsControllers = require('./controllers/DessertsController.js')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Welcome to my page !")
  })

  app.get('/Appetizers',appetizerControllers.getAppetizers)
  app.get('/Appetizers/:id',appetizerControllers.getApptById)

  app.get('/Desserts',dessertsControllers. getDesserts)
  app.get('/Desserts/:id',dessertsControllers.getDessById)

  app.get('/Entrees',entreesControllers. getEntrees)
  //app.get('/Entrees/:id',entreesControllers.getEntreesById)
  
