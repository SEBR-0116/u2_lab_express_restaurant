const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))


const appsController=require('./controllers/appetizers')

const entreesController=require('./controllers/entrees')

const dessertsController=require('./controllers/desserts')





app.get('/appetizers', appsController.getApps)

app.get('/appetizers/:id', appsController.getAppById)

app.get('/entrees', entreesController.getEntrees)

app.get('/entrees/:id', entreesController.getEntreeById)

app.get('/desserts', dessertsController.getDesserts)

app.get('/desserts/:id', dessertsController.getDessertById)
