const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Controllers
const dessertControllers = require('./controllers/DessertController')
const appetizerControllers = require('./controllers/AppetizerController')
const entreeControllers = require('./controllers/EntreeController')


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Server Connected")
})

// app.get('/menu', )

app.get('/menu/desserts', dessertControllers.getDesserts)
app.get('/menu/desserts/:id', dessertControllers.getDessertsByID)

app.get('/menu/appetizers', appetizerControllers.getAppetizers)
app.get('/menu/appetizers/:id', appetizerControllers.getAppetizersByID)

app.get('/menu/entrees', entreeControllers.getEntrees)
app.get('/menu/entrees/:id', entreeControllers.getEntreesByID)

app.get('/*', (req, res) => {
    res.send("404 Error: Page not found")
})