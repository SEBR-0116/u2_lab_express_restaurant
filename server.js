//EXPRESS BOILER PLATE
const express = require('express')
const cors = require('cors')
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
// ^ EXPRESS BOILER PLATE

app.get('/', (req,res) => {
    res.send('welcome to my page!')
})



app.get('/appetizers', appetizerController.getAppetizers)
app.get('/appetizers/:id', appetizerController.getAppetizerById)

app.get('/entrees', entreeController.getEntrees)
app.get('/entrees/:id', entreeController.getEntreeById)

app.get('/desserts', dessertController.getDesserts)
app.get('/desserts/:id', dessertController.getDessertById)