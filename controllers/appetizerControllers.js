const getAppetizers = (request, response) => {
  
  response.send({
      salads: ['salad', 'soup', 'ravioli']
  })
}
const getAppetizerSalad = (request, response) => {
  
  response.send({
      'salads': {
        'farro salad': {
          'price': 12,
          'ingredients':['vegetable stock', 'farro', 'cucumber','red pepper', 'tomato', 'feta cheese', 'red onion', 'parsley', 'greek vinaigrette'],
          'recipe url': 'https://www.gimmesomeoven.com/mediterranean-farro-salad-recipe/',
          'img url': 'https://www.gimmesomeoven.com/wp-content/uploads/2015/05/Mediterranean-Farro-Salad-4.jpg',
          'currentMenuItem': true
        },
        'italian salad': {
          'price': 12,
          'ingredients': [''],
          'recipe url': '',
          'img url': '',
          'currentMenuItem': false
        },
        'tomato, haricots verts, and potato salad': {
          'price': 12,
          'currentMenuItem': false
        }
      }
  })
}
const getAppetizerSoup = (request, response) => {

  response.send({
    'soups': {
      'minestrone': {
          'price': 15.00,
          'ingredients': ['onion', 'carrot', 'celery','garlic','tomato','green bean','white bean', 'bay leaf', 'oregano','thyme', 'pasta','red pepper flake', 'parmesan cheese'],
          'recipe url': 'https://www.loveandlemons.com/minestrone-soup/',
          'img url': 'https://thekitchengirl.com/wp-content/uploads/minestrone-soup-recipe-A_09-2-1.jpg',
          'currentMenuItem': true
      },
      'chicken gnocchi': {
          'price': 15.00,
          'ingredients': ['boneless skinless chicken breast', 'celery', 'onion', 'garlic', 'carrot', 'olive oil', 'chicken broth', 'salt', 'peper', 'thyme', 'potato gnocchi', 'heavy whipping cream', 'spinach'],
          'recipe url': 'https://www.lecremedelacrumb.com/olive-garden-chicken-gnocchi-soup/',
          'img url': 'https://www.lecremedelacrumb.com/wp-content/uploads/2018/10/chicken-gnocchi-soup-7.jpg',
          'currentMenuItem': true
      },
      'ribollita': {
          'price': 15.00,
          'ingredients': ['onion', 'carrot','celery stalks', 'garlic clove', 'tuscan kale', 'parmesan cheese', 'tomatoe', 'country bread loaf', 'extra-virgin olive oil', 'salt','cannellini beans', 'red pepper flakes'],
          'recipe url': 'https://www.bonappetit.com/recipe/simple-ribollita',
          'img url': 'https://assets.bonappetit.com/photos/5c3f571634fa1c11d7172368/1:1/w_960,c_limit/Basically-Ribollita-01.jpg',
          'currentMenuItem': false
      }
    }
  })
}
module.exports = {
  getAppetizers,
  getAppetizerSalad,
  getAppetizerSoup
}