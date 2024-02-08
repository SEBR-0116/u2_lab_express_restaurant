const express = require('express')
const cors = require('cors')
const appetizerscontroller = require('./controller/appetizersController.js')
const entreesController = require('./controller/entreesController.js')
const dessertsController = require('./controller/dessertsController.js')
const PORT = process.env.PORT || 3002

const app = express()



app.use(cors())
// the following middleware comes out of the box with express...
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("welcome to my page!")
  })
  app.get('/appetizers',appetizerscontroller.getAppetizers)

  app.get('/appetizers/:id',appetizerscontroller.getAppetizersById)
  
  app.get('/entrees',entreesController.getEntrees)

  app.get('/entrees/:id',entreesController.getEntreesById)

  app.get('/desserts',dessertsController.getDesserts)

  app.get('/desserts/:id',dessertsController.getDessertsById)