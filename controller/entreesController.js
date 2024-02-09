const entrees = [
  {
    name: "Crab Cakes",
    Amount: 5,
    Price: 16.89,
    Calories: 1080,
    Vegetarians: false,
  },
  {
    name: "Pizza Ravioli",
    Amount: 18,
    Price: 17.41,
    Calories: 1576,
    Vegetarians: false,
  },
  {
    name: "Chicken Pot Pie",
    Amount: 1,
    Price: 12.99,
    Calories: 980,
    Vegetarians: false,
  },
];

const getEntrees = (req, res) => {
  res.send(entrees);
};

const getEntreeById = (req, res) => {
  res.send(entrees[req.params.id]);
};

module.exports = {
  getEntrees,
  getEntreeById,
};
