const Entrees = [
    { name: "New York Strip",
    description: ["USAD Prime", "160z cut"],
      calories: "1390",
      price: "59",
      kosher: true },
      {img_path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHcJxp3adeKCGdGpW-nxoJ8RjSzsBAsP3dTQ&usqp=CAU"},
  
    { name: "Lamb Chops",
description: ["three extra thick chops", "fresh mint"],
calories: "860",
price: "59",
kosher: true},

{name: "Stuffed Chicken Breast",
description: ["over roasted double chicken breast", "garlic herb chese", "lemon butter"],
calories: "720",
price: "39",
kosher: true},
];

const getEntrees = (req, res) => {
    res.send(Entrees)
}

const getEntreesById = (req, res) => {
    res.send(Entrees[req.params.id])}

module.exports ={
    getEntrees,
    getEntreesById
}
