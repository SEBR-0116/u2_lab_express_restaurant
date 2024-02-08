const express = require('express')
const cors = require('cors')
const appetizer = require('./controllers/Appetizers')
const dessert = require('./controllers/Desserts')
const entree = require('./controllers/Entrees')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.send({ msg: 'Welcome to La Restaurant!' })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})

app.get('/appetizers', appetizer.getApps)
app.get('/appetizers/:id', appetizer.getAppById)

app.get('/desserts', dessert.getDesserts)
app.get('/desserts/:id', dessert.getDessertById)

app.get('/entrees', entree.getEntrees)
app.get('/entrees/:id', entree.getEntreeById)
