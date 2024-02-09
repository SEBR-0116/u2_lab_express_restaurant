const mainCourses = [
    {
        dish: 'Venison Loin',
        accompaniments: ['Chestnut Purée', 'Carrots', 'Shiitake Mushrooms'],
        price: 46
    },
    {
        dish: 'Wild Alaska Black Cod',
        accompaniments: ['Carrots', 'Creamed Spinach', 'Riesling Nage'],
        price: 46
    },
    {
        dish: 'Long Island Duck Breast',
        accompaniments: ['Red Cabbage', 'Squash', 'Zweigelt Sauce'],
        price: 44
    },
    {
        dish: 'Cape Cod Scallops',
        accompaniments: ['Black Lentil', 'Potato Purée', 'Mushroom Jus'],
        price: 46
    }
]

const getMainCourses = (req, res) => {
        res.send(mainCourses)
}

const getMainCoursesById = (req,res) => {
    res.send(mainCourses[req.params.id])
}

const getMainCoursesByName = (req, res) => {
    res.send(mainCourses.filter((main) => main.dish == req.params.dish))
}

const sortByPrice = (req, res) => {
    const sorted = mainCourses.toSorted((a, b) => {
        return a.price - b.price
    })
    res.send(sorted)
}

module.exports = {
    getMainCourses,
    getMainCoursesById,
    getMainCoursesByName,
    sortByPrice
}