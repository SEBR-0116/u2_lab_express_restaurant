const express = require("express");
const cors = require("cors");
const appetizersController = require("./controller/appetizersController.js");
const dessertsController = require("./controller/dessertsController.js");
const entreesController = require("./controller/entreesController.js");
const PORT = process.env.PORT || 3002;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => {
  console.log(`Express server working at port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("We Grubbin");
});

app.get("/appetizers", appetizersController.getAppetizers);

app.get("/appetizers/:id", appetizersController.getAppetizersById);

app.get("/desserts", dessertsController.getDesserts);

app.get("/desserts/:id", dessertsController.getDessertById);

app.get("/entrees", entreesController.getEntrees);

app.get("/entrees/:id", entreesController.getEntreeById);
