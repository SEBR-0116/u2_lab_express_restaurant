const AppetizerSchema = require('./appetizer')
const DessertSchema = require('./dessert')
const EntreeSchema = require('./dessert')

const Appetizer = mongoose.model('Appetizer', AppetizerSchema)
const Dessert = mongoose.model('Dessert', AppetizerSchema)
const Entree = mongoose.model('Entree', EntreeSchema)

module.exports = {
    Appetizer,
    Dessert,
    Entree
}