const express = require(`express`)
const PORT = process.env.PORT || 3001
const AppetizersController = require(`./controllers/AppetizersController.js`)
const DessertController = require(`./controllers/DessertController.js`)
const EntreeController = require(`./controllers/EntreeController.js`)


const app = express()

app.listen(PORT,()=>{
    console.log(`Express server listening on port ${PORT}`)
})

app.get(`/Showmenu`,(req,res)=>
{
    res.send(AppetizersController.menu)
})

app.get(`/Showmenu/Appetizerslist`,AppetizersController.getAppetizerlist)
app.get(`/Showmenu/Appetizerslist/:id`,AppetizersController.getAppetizerlistByID)


app.get(`/Showmenu/Entreeslist`,EntreeController.getEntreeslist)
app.get(`/Showmenu/Entreeslist/:id`,EntreeController.getEntreeslistbyID)


app.get(`/Showmenu/Dessertlist`,DessertController.getDessertlist)
app.get(`/Showmenu/Dessertlist/:id`,DessertController.getDessertlistByID)