const menu = {
    dessert : [
        {
            name:"Thai Taro Custard Cake",
            description:"aro ,coconut milk,eggs,palm sugar.",
            price: 5
        },
        {
            name:"Banana With Sweet Sticky Rice",
            description:"Banana,sticky rice ,coconut milk,sugar,black Beans.",
            price: 5
        },
        {
            name:"Mango with Sticky Rice",
            description:"Mango with sweet sticky rice",
            price: 4
        }

    ],
    Appetizers : [
        {
            name:"Egg Rolls",
            description:"Egg rolls filled with chicken, carrot, cabbage, and bean thread noodles served with a side of sweet & sour sauce",
            price: 7
        },
        {
            name:"Fried Tofu",
            description:"Deep-fried bean curd with a side of sweet & sour sauce topped with chili paste, cilantro and ground peanuts.",
            price: 6
        },
        {
            name:"Spring Rolls",
            description:"Fresh Thai rolls wrapped with bean sprouts, cucumber, and tofu with sweet tamarind sauce.",
            price: 7.5
        },
        {
            name:"Crab Rangoon",
            description:"Deep-fried wontons filled with cream cheese, celery, and imitation crab served with a side of sweet & sour sauce.",
            price: 8
        }  
    ],
    Entree : [
        {
            name:"Basil Leaves",
            description:"Your choice of ground meat with basil leaves, chili pepper, and bell peppers",
            price: 14
        },
        {
            name:"Pad Ginger",
            description:"Your choice of meat with ginger, onions and mushrooms.",
            price: 14
        },
        {
            name:"Rama Special",
            description:"Chicken topped with peanut sauce and carrots on a plate of steamed broccoli",
            price: 14
        },
    ]
}


const getAppetizerlist = (req,res)=>{

    res.send(menu.Appetizers)
}

const getAppetizerlistByID = (req,res)=>{

    res.send(menu.Appetizers[[req.params.id]])
}

module.exports = {
    getAppetizerlist,
    menu,
    getAppetizerlistByID
}