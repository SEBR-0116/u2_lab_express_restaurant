const getEntrees = (request, response) => {

  response.send({
    'entrees': ['chicken marsala', 'ravioli']
  })
}
const getEntreeChickenMarsala = (request, response) => {

  response.send({
    'chicken marsala': {
      'price': 23,
      'currentMenuItem': true
    }
  })
}
const getEntreeRavioli = (request, response) => {

  response.send({
    'ravioli': {
      'price': 20,
      'currentMenuItem': true
    }
  })
}

  module.exports = {
    getEntrees,
    getEntreeChickenMarsala,
    getEntreeRavioli
  }