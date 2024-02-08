const express = require('express')
const cors = require('cors')
const appController = require('./Controllers/AppControllers')
const entreeController = require('./Controllers/EntreeControllers')
const dessertController = require('./Controllers/DessertContollers')
const PORT = process.env.PORT || 3002

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

//app.get('/apps', (req, res) => { res.send('These are appetizers')})


//apps
app.get('/apps', appController.getApps)

app.get('/apps/:id', appController.getAppById)

//entrees
app.get('/entrees', entreeController.getEntrees)

app.get('/entrees/:id', entreeController.getEntreeById)

//desserts
app.get('/desserts', dessertController.getDesserts)

app.get('/desserts/:id', dessertController.getDessertById)
