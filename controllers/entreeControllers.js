const getEntrees = (request, response) => {
  
  response.send({
      message: 'Getting Entrees'
    })
  }


  module.exports = {
    getEntrees
  }