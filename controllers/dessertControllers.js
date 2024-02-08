const getDesserts = (request, response) => {

  response.send({
    'desserts': ['cannoli','tiramisu', 'panna cotta']
  })
}

const getDessertTiramisu = (request, response) => {

  response.send({
    'tiramisu': {
      'price': 8,
      'currentMenuItem': true
    }
  })
}
const getDessertCannoli = (request, response) => {

  response.send({
    'cannoli': {
      'price': 10,
      'currentMenuItem': true
    }
  })
}
const getDessertPannaCotta = (request, response) => {

  response.send({
    'panna cotta': {
      'price': 7,
      'currentMenuItem': false
    }
  })
}

module.exports = {
  getDesserts,
  getDessertTiramisu,
  getDessertCannoli,
  getDessertPannaCotta
}