const express = require('express')
const cors = require('cors')
const AppetController = require('./Appetizers/Appetizers.js')
const EntreeController = require('./Entrees/Entrees.js')
const DessertsController = require('./Desserts/Desserts.js')

const PORT = process.env.PORT || 3001

const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded ({extended: false}))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })
  
app.get('/', (req, res) => {
      res.send("welcome to Daisy's page")
    })

app.get('/middleware', (request, response, next) => {
        console.log('this is middleware')
        next()
    },
    (req, res) => {
        res.send('response completed')
    })


app.get('/appetizers', AppetController.getAppetizers)
app.get('/appetizers/:id', AppetController.getAppById)

app.get('/entrees', EntreeController.getEntrees)
app.get('/entrees/:id', EntreeController.getEntreeById)

app.get('/desserts', DessertsController.getDesserts)
app.get('/desserts/:id', DessertsController.getDessertsById)