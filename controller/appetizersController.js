const appetizers = [
  {
    name: "Mozzarella Sticks",
    Amount: 7,
    Price: 8.99,
    Calories: 1120,
    Vegetarians: true,
  },
  {
    name: "Cheese Sliders",
    Amount: 3,
    Price: 6.79,
    Calories: 890,
    Vegetarians: false,
  },
  {
    name: "Garlic Parm Wings",
    Amount: 8,
    Price: 12.49,
    Calories: 1324,
    Vegetarians: false,
  },
];

const getAppetizers = (req, res) => {
  res.send(appetizers);
};

const getAppetizersById = (req, res) => {
  res.send(appetizers[req.params.id]);
};

module.exports = {
  getAppetizers,
  getAppetizersById,
};
