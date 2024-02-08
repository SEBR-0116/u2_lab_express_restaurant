const express = require('express')
const cors = require('cors')
const controller = require('./controller/controller.js')
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
  app.get('/appetizers',controller.getAppetizers)

  app.get('/appetizers/:id',controller.getAppetizersById)
  
  app.get('/entrees',controller.getEntrees)

  app.get('/entrees/:id',controller.getEntreesById)

  app.get('/desserts',controller.getDesserts)

  app.get('/desserts/:id',controller.getDessertsById)