const mongoose = require("mongoose")
const Restaurant = require("./RestaurantModel")

mongoose.connect("mongodb+srv://norbivitus:GnEVoVydOuI8k6M7@cluster0.on4klzg.mongodb.net/")

populateRestaurants() //uncomment if you want to populate restaurants
async function populateRestaurants() {
    const restaurants = await Restaurant.create({
        name: "McDonalds",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/800px-McDonald%27s_Golden_Arches.svg.png",
        openingHour: 0,
        closingHour: 24,
        menu: [{
            id: "FriesMcDonalds",
            name: "Fries",
            price: 4.50,
            imgUrl: "https://cdn-icons-png.flaticon.com/512/1057/1057356.png"
        }, {
            id: "BurgerMcDonalds",
            name: "Burger",
            price: 16.20,
            imgUrl: "https://seeklogo.com/images/B/burger-logo-16660B38D4-seeklogo.com.png"
        }, {
            id: "SandwichMcDonalds",
            name: "Sandwich",
            price: 12,
            imgUrl: "https://i.pinimg.com/originals/0b/b3/24/0bb32476e9ad6f97c8359763e1ee5536.png"
        }, {
            id: "SaladMcDonalds",
            name: "Salad",
            price: 18.40,
            imgUrl: "https://static.vecteezy.com/system/resources/previews/002/552/508/original/bowl-with-salad-tomato-lettuce-health-food-flat-style-icon-free-vector.jpg"
        }, {
            id: "PizzaMcDonalds",
            name: "Pizza",
            price: 14.50,
            imgUrl: "https://png.pngtree.com/png-clipart/20221006/original/pngtree-slice-of-pizza-vector-illustration-design-with-delicious-melted-cheese-png-image_8659030.png"
        }, {
            id: "ChickenMcDonalds",
            name: "Chicken",
            price: 9.99,
            imgUrl: "https://img.freepik.com/premium-vector/grilled-chicken-illustration_193274-1963.jpg"
        }, {
            id: "Coca ColaMcDonalds",
            name: "Coca Cola",
            price: 3,
            imgUrl: "https://theoriginalmaidsofhonour.co.uk/cdn/shop/products/CokeCan_1334x.png?v=1594893838"
        }, {
            id: "FantaMcDonalds",
            name: "Fanta",
            price: 3,
            imgUrl: "https://www.pngplay.com/wp-content/uploads/15/Fanta-Orange-Can-Transparent-Background.png"
        }]
    }, {
        name: "KFC",
        imgUrl: "https://seeklogo.com/images/K/kfc-logo-A232F2E6D1-seeklogo.com.png",
        openingHour: 10,
        closingHour: 22,
        menu: [{
            id: "FriesKFC",
            name: "Fries",
            price: 4.50,
            imgUrl: "https://cdn-icons-png.flaticon.com/512/1057/1057356.png"
        }, {
            id: "Chicken WingsKFC",
            name: "Chicken Wings",
            price: 16.20,
            imgUrl: "https://seeklogo.com/images/B/burger-logo-16660B38D4-seeklogo.com.png"
        }, {
            id: "SandwichKFC",
            name: "Sandwich",
            price: 12,
            imgUrl: "https://i.pinimg.com/originals/0b/b3/24/0bb32476e9ad6f97c8359763e1ee5536.png"
        }, {
            id: "SaladKFC",
            name: "Salad",
            price: 18.40,
            imgUrl: "https://static.vecteezy.com/system/resources/previews/002/552/508/original/bowl-with-salad-tomato-lettuce-health-food-flat-style-icon-free-vector.jpg"
        }, {
            id: "Chiken BucketKFC",
            name: "Chiken Bucket",
            price: 14.50,
            imgUrl: "https://png.pngtree.com/png-clipart/20221006/original/pngtree-slice-of-pizza-vector-illustration-design-with-delicious-melted-cheese-png-image_8659030.png"
        }, {
            id: "ChickenKFC",
            name: "Chicken",
            price: 9.99,
            imgUrl: "https://img.freepik.com/premium-vector/grilled-chicken-illustration_193274-1963.jpg"
        }, {
            id: "PepsiKFC",
            name: "Pepsi",
            price: 3,
            imgUrl: "https://theoriginalmaidsofhonour.co.uk/cdn/shop/products/CokeCan_1334x.png?v=1594893838"
        }, {
            id: "MirindaKFC",
            name: "Mirinda",
            price: 3,
            imgUrl: "https://www.pngplay.com/wp-content/uploads/15/Fanta-Orange-Can-Transparent-Background.png"
        }]

    }, {
        name: "Subway",
        imgUrl: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082016/untitled-1_20.jpg?itok=PJLwfaAw",
        openingHour: 10,
        closingHour: 24,
        menu: [{
            id: "FriesSubway",
            name: "Fries",
            price: 3.50,
            imgUrl: "https://cdn-icons-png.flaticon.com/512/1057/1057356.png"
        }, {
            id: "Chicken WingsSubway",
            name: "Chicken Wings",
            price: 16.20,
            imgUrl: "https://seeklogo.com/images/B/burger-logo-16660B38D4-seeklogo.com.png"
        }, {
            id: "SandwichSubway",
            name: "Sandwich",
            price: 12,
            imgUrl: "https://i.pinimg.com/originals/0b/b3/24/0bb32476e9ad6f97c8359763e1ee5536.png"
        }, {
            id: "SaladSubway",
            name: "Salad",
            price: 18.40,
            imgUrl: "https://static.vecteezy.com/system/resources/previews/002/552/508/original/bowl-with-salad-tomato-lettuce-health-food-flat-style-icon-free-vector.jpg"
        }, {
            id: "PepsiSubway",
            name: "Pepsi",
            price: 3,
            imgUrl: "https://theoriginalmaidsofhonour.co.uk/cdn/shop/products/CokeCan_1334x.png?v=1594893838"
        }, {
            id: "MirindaSubway",
            name: "Mirinda",
            price: 3,
            imgUrl: "https://www.pngplay.com/wp-content/uploads/15/Fanta-Orange-Can-Transparent-Background.png"

        }]
    }, {
        name: "Los Pollos Hermanos",
        imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/ae/Los_Pollos_Hermanos_logo.png",
        openingHour: 10,
        closingHour: 22,
        menu: [{
            id: "FriesLosPollosHermanos",
            name: "Fries",
            price: 3.50,
            imgUrl: "https://cdn-icons-png.flaticon.com/512/1057/1057356.png"
        }, {
            id: "Chicken LosPollosHermanos",
            name: "Chicken Wings",
            price: 16.20,
            imgUrl: "https://seeklogo.com/images/B/burger-logo-16660B38D4-seeklogo.com.png"
        }, {
            id: "SandwichLosPollosHermanos",
            name: "Sandwich",
            price: 12,
            imgUrl: "https://i.pinimg.com/originals/0b/b3/24/0bb32476e9ad6f97c8359763e1ee5536.png"
        }, {
            id: "SaladLosPollosHermanos",
            name: "Salad",
            price: 18.40,
            imgUrl: "https://static.vecteezy.com/system/resources/previews/002/552/508/original/bowl-with-salad-tomato-lettuce-health-food-flat-style-icon-free-vector.jpg"
        }, {
            id: "Chiken BucketLosPollosHermanos",
            name: "Chiken Bucket",
            price: 14.50,
            imgUrl: "https://png.pngtree.com/png-clipart/20221006/original/pngtree-slice-of-pizza-vector-illustration-design-with-delicious-melted-cheese-png-image_8659030.png"
        }, {
            id: "ChickenLosPollosHermanos",
            name: "Chicken",
            price: 9.99,
            imgUrl: "https://img.freepik.com/premium-vector/grilled-chicken-illustration_193274-1963.jpg"
        }, {
            id: "PepsiLosPollosHermanos",
            name: "Pepsi",
            price: 3,
            imgUrl: "https://theoriginalmaidsofhonour.co.uk/cdn/shop/products/CokeCan_1334x.png?v=1594893838"
        }, {
            id: "MirindaLosPollosHermanos",
            name: "Mirinda",
            price: 3,
            imgUrl: "https://www.pngplay.com/wp-content/uploads/15/Fanta-Orange-Can-Transparent-Background.png"

        }]


    }, {
        name: "Pizza Hut",
        imgUrl: "https://seeklogo.com/images/P/pizza-hut-logo-DBFE2E48AF-seeklogo.com.png",
        openingHour: 0,
        closingHour: 24,
        menu: [{
            id: "FriesPizzaHut",
            name: "Fries",
            price: 3.50,
            imgUrl: "https://cdn-icons-png.flaticon.com/512/1057/1057356.png"
        }, {
            id: "Chicken PizzaHut",
            name: "Chicken Wings",
            price: 16.20,
            imgUrl: "https://seeklogo.com/images/B/burger-logo-16660B38D4-seeklogo.com.png"
        }, {
            id: "SandwichPizzaHut",
            name: "Sandwich",
            price: 12,
            imgUrl: "https://i.pinimg.com/originals/0b/b3/24/0bb32476e9ad6f97c8359763e1ee5536.png"
        }, {
            id: "SaladPizzaHut",
            name: "Salad",
            price: 18.40,
            imgUrl: "https://static.vecteezy.com/system/resources/previews/002/552/508/original/bowl-with-salad-tomato-lettuce-health-food-flat-style-icon-free-vector.jpg"
        }, {
            id: "Chiken BucketPizzaHut",
            name: "Chiken Bucket",
            price: 14.50,
            imgUrl: "https://png.pngtree.com/png-clipart/20221006/original/pngtree-slice-of-pizza-vector-illustration-design-with-delicious-melted-cheese-png-image_8659030.png"
        }, {
            id: "ChickenPizzaHut",
            name: "Chicken",
            price: 9.99,
            imgUrl: "https://img.freepik.com/premium-vector/grilled-chicken-illustration_193274-1963.jpg"
        }, {
            id: "PepsiPizzaHut",
            name: "Pepsi",
            price: 3,
            imgUrl: "https://theoriginalmaidsofhonour.co.uk/cdn/shop/products/CokeCan_1334x.png?v=1594893838"
        }, {
            id: "MirindaPizzaHut",
            name: "Mirinda",
            price: 3,
            imgUrl: "https://www.pngplay.com/wp-content/uploads/15/Fanta-Orange-Can-Transparent-Background.png"

        }]
    }, {
        name: "Burger King",
        imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png",
        openingHour: 10,
        closingHour: 22,
        menu: [{
            id: "FriesBurgerKing",
            name: "Fries",
            price: 3.50,
            imgUrl: "https://cdn-icons-png.flaticon.com/512/1057/1057356.png"
        }, {
            id: "ChickenBurgerKing",
            name: "Chicken Wings",
            price: 16.20,
            imgUrl: "https://seeklogo.com/images/B/burger-logo-16660B38D4-seeklogo.com.png"
        }, {
            id: "SandwichBurgerKing",
            name: "Sandwich",
            price: 12,
            imgUrl: "https://i.pinimg.com/originals/0b/b3/24/0bb32476e9ad6f97c8359763e1ee5536.png"
        }, {
            id: "SaladBurgerKing",
            name: "Salad",
            price: 18.40,
            imgUrl: "https://static.vecteezy.com/system/resources/previews/002/552/508/original/bowl-with-salad-tomato-lettuce-health-food-flat-style-icon-free-vector.jpg"
        }, {
            id: "Chiken BucketBurgerKing",
            name: "Chiken Bucket",
            price: 14.50,
            imgUrl: "https://png.pngtree.com/png-clipart/20221006/original/pngtree-slice-of-pizza-vector-illustration-design-with-delicious-melted-cheese-png-image_8659030.png"
        }, {
            id: "ChickenBurgerKing",
            name: "Chicken",
            price: 9.99,
            imgUrl: "https://img.freepik.com/premium-vector/grilled-chicken-illustration_193274-1963.jpg"
        }, {
            id: "PepsiBurgerKing",
            name: "Pepsi",
            price: 3,
            imgUrl: "https://theoriginalmaidsofhonour.co.uk/cdn/shop/products/CokeCan_1334x.png?v=1594893838"
        }, {
            id: "MirindaBurgerKing",
            name: "Mirinda",
            price: 3,
            imgUrl: "https://www.pngplay.com/wp-content/uploads/15/Fanta-Orange-Can-Transparent-Background.png"

        }]
    }, {
        name: "Five Guys",
        imgUrl: "https://dynl.mktgcdn.com/p/eCdSZKzdeZNQFV4AiM1Z3cDCeBb4ePRc9gxz4JXSmGA/2521x2521.jpg",
        openingHour: 10,
        closingHour: 22,
        menu: [{
            id: "FriesFiveGuys",
            name: "Fries",
            price: 3.50,
            imgUrl: "https://cdn-icons-png.flaticon.com/512/1057/1057356.png"
        }, {
            id: "ChickenFiveGuys",
            name: "Chicken Wings",
            price: 16.20,
            imgUrl: "https://seeklogo.com/images/B/burger-logo-16660B38D4-seeklogo.com.png"
        }, {
            id: "SandwichFiveGuys",
            name: "Sandwich",
            price: 12,
            imgUrl: "https://i.pinimg.com/originals/0b/b3/24/0bb32476e9ad6f97c8359763e1ee5536.png"
        }, {
            id: "SaladFiveGuys",
            name: "Salad",
            price: 18.40,
            imgUrl: "https://static.vecteezy.com/system/resources/previews/002/552/508/original/bowl-with-salad-tomato-lettuce-health-food-flat-style-icon-free-vector.jpg"
        }, {
            id: "Chiken BucketFiveGuys",
            name: "Chiken Bucket",
            price: 14.50,
            imgUrl: "https://png.pngtree.com/png-clipart/20221006/original/pngtree-slice-of-pizza-vector-illustration-design-with-delicious-melted-cheese-png-image_8659030.png"
        }, {
            id: "ChickenFiveGuys",
            name: "Chicken",
            price: 9.99,
            imgUrl: "https://img.freepik.com/premium-vector/grilled-chicken-illustration_193274-1963.jpg"
        }, {
            id: "PepsiFiveGuys",
            name: "Pepsi",
            price: 3,
            imgUrl: "https://theoriginalmaidsofhonour.co.uk/cdn/shop/products/CokeCan_1334x.png?v=1594893838"
        }, {
            id: "MirindaFiveGuys",
            name: "Mirinda",
            price: 3,
            imgUrl: "https://www.pngplay.com/wp-content/uploads/15/Fanta-Orange-Can-Transparent-Background.png"

        }]
    }, {
        name: "Nordsee",
        imgUrl: "https://play-lh.googleusercontent.com/V6KUVpovt8hcUSFVPY-2TLhISjljrzXReR9a9FLXpsOgCxY8lo7eLTeUmXwdzeci3Q=w240-h480-rw",
        openingHour: 10,
        closingHour: 22,
        menu: [{
            id: "FriesNordsee",
            name: "Fries",
            price: 3.50,
            imgUrl: "https://cdn-icons-png.flaticon.com/512/1057/1057356.png"
        }, {
            id: "ChickenNordsee",
            name: "Chicken Wings",
            price: 16.20,
            imgUrl: "https://seeklogo.com/images/B/burger-logo-16660B38D4-seeklogo.com.png"
        }, {
            id: "SandwichNordsee",
            name: "Sandwich",
            price: 12,
            imgUrl: "https://i.pinimg.com/originals/0b/b3/24/0bb32476e9ad6f97c8359763e1ee5536.png"
        }, {
            id: "SaladNordsee",
            name: "Salad",
            price: 18.40,
            imgUrl: "https://static.vecteezy.com/system/resources/previews/002/552/508/original/bowl-with-salad-tomato-lettuce-health-food-flat-style-icon-free-vector.jpg"
        }, {
            id: "Chiken BucketNordsee",
            name: "Chiken Bucket",
            price: 14.50,
            imgUrl: "https://png.pngtree.com/png-clipart/20221006/original/pngtree-slice-of-pizza-vector-illustration-design-with-delicious-melted-cheese-png-image_8659030.png"
        }, {
            id: "ChickenNordsee",
            name: "Chicken",
            price: 9.99,
            imgUrl: "https://img.freepik.com/premium-vector/grilled-chicken-illustration_193274-1963.jpg"
        }, {
            id: "PepsiNordsee",
            name: "Pepsi",
            price: 3,
            imgUrl: "https://theoriginalmaidsofhonour.co.uk/cdn/shop/products/CokeCan_1334x.png?v=1594893838"
        }, {
            id: "MirindaNordsee",
            name: "Mirinda",
            price: 3,
            imgUrl: "https://www.pngplay.com/wp-content/uploads/15/Fanta-Orange-Can-Transparent-Background.png"

        }]

    })
    console.log(restaurants)
}


// {
//     name: "Subway",
//     imgUrl: "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082016/untitled-1_20.jpg?itok=PJLwfaAw",
//     openingHour: 10,
//     closingHour: 22
// }, {
//     name: "Los Pollos Hermanos",
//     imgUrl: "https://upload.wikimedia.org/wikipedia/en/a/ae/Los_Pollos_Hermanos_logo.png",
//     openingHour: 10,
//     closingHour: 22
// }, {
//     name: "Pizza Hut",
//     imgUrl: "https://seeklogo.com/images/P/pizza-hut-logo-DBFE2E48AF-seeklogo.com.png",
//     openingHour: 0,
//     closingHour: 24
// }, {
//     name: "Burger King",
//     imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png",
//     openingHour: 10,
//     closingHour: 22
// }, {
//     name: "Five Guys",
//     imgUrl: "https://dynl.mktgcdn.com/p/eCdSZKzdeZNQFV4AiM1Z3cDCeBb4ePRc9gxz4JXSmGA/2521x2521.jpg",
//     openingHour: 10,
//     closingHour: 22
// }, {
//     name: "Nordsee",
//     imgUrl: "https://play-lh.googleusercontent.com/V6KUVpovt8hcUSFVPY-2TLhISjljrzXReR9a9FLXpsOgCxY8lo7eLTeUmXwdzeci3Q=w240-h480-rw",
//     openingHour: 10,
//     closingHour: 22
// }

// populateMenus()   //uncomment if you want to populate menu