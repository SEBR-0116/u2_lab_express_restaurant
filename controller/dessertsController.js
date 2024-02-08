const desserts = [
  {
    name: "Peanut Butter Chocolate chip cookies",
    Amount: 12,
    Price: 7.99,
    Calories: 890,
    glutenFree: true,
  },
  {
    name: "Apple Cider Donuts",
    Amount: 24,
    Price: 19.89,
    Calories: 1743,
    glutenFree: false,
  },
  {
    name: "Funnel Cakes",
    Amount: 2,
    Price: 15.0,
    Calories: 1738,
    glutenFree: false,
  },
];

const getDesserts = (req, res) => {
  res.send(desserts);
};

const getDessertById = (req, res) => {
  res.send(desserts[req.params.id]);
};

module.exports = {
  getDesserts,
  getDessertById,
};
