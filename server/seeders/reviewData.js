const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/salon-project', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
});


const review = [
    {
        'date': '12/01/2021',
        'name': 'Sarah B',
        'quote': `Lai is the best stylist I have ever had and she has kept my hair healthy over the years. She can do beautiful colors and has a passion for what she does. She kept me covid safe while keeping my hair upkept (including making me custom color take home kits when salons could not be open at all) until I left California. In fact when I moved across the country she made me a few take home kits to take with me so I could keep up her custom color a bit longer. Since I do non natural colors (usually) she'll dye it dark so that it can fade a while, so we talk about how the color will transition over time and if it'll look good rooted or not....she's just awesome.`,
        'image': '../../client/src/assets/images/review1.jpg',
        'rating': '5/5'
    },
    {
        'date': '06/04/2019',
        'name': 'Kerri K',
        'quote': `Lai is super talented and keeps my short hair looking sassy! I have to get it cut pretty regularly, but her talent with the scissor keeps my cut looking great until I need to see her again! SHe also cuts my daughters hair which is long and layered, she can do it all!`,
        'rating': '5/5'
    }
]

db.Review.deleteMany({})
    .then(() => db.Review.collection.insertMany(review))
    .then((data) => {
        // console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });