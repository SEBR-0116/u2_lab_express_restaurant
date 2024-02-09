const express = require('express')
const cors = require('cors')
const entreeController = require('./controllers/entreeController')
const mainCourseController = require('./controllers/mainCourseController')
const dessertController = require('./controllers/dessertController')
const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/entrees', entreeController.getEntrees)
app.get('/entrees/id/:id', entreeController.getEntreesById)
app.get('/entrees/dish/:dish', entreeController.getEntreesByDish)
app.get('/entrees/prices', entreeController.sortByPrice)

app.get('/mains', mainCourseController.getMainCourses)
app.get('/mains/id/:id', mainCourseController.getMainCoursesById)
app.get('/mains/dish/:dish', mainCourseController.getMainCoursesByName)
app.get('/mains/prices', mainCourseController.sortByPrice)

app.get('/desserts', dessertController.getDesserts)
app.get('/desserts/id/:id', dessertController.getDessertsById)
app.get('/desserts/dish/:dish', dessertController.getDessertsByDish)
app.get('/desserts/prices', dessertController.sortByPrice)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))