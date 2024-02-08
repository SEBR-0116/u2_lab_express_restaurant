const db = require('../db')
const { Appetizer, Dessert, Entree } = require('./models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const entrees = [
    {
      name: 'yeer',
      price: 100,
      description: 'delicious'
    },
    {
        name: 'skeet',
        price: 200,
        description: 'delicious'
    }
  ]
 
  await Entree.insertMany(entrees)
  console.log('Created appetizers!')
}

const run = async () => {
  await main()
  db.close()
}

run()
