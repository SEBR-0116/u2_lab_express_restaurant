const express = require('express')
const cors = require('cors')

const appController = require('./controllers/AppControllers.js')
const dessertController = require('./controllers/DessertControllers.js')
const entreeController = require('./controllers/EntreeControllers.js')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))



app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('welcome to PLUCKERS WING BAR :D')
})

//controller calls
app.get('/menu', appController.getApps, entreeController.getEntrees, dessertController.getDesserts)

app.get('/menu/apps', appController.getApps)
app.get('/menu/apps/:id', appController.getAppById)

app.get('/menu/entrees', entreeController.getEntrees)
app.get('/menu/entrees/:id', entreeController.getEntreeById)

app.get('/menu/desserts', dessertController.getDesserts)
app.get('/menu/desserts/:id', dessertController.getDessertById)



