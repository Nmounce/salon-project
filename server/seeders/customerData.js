const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/salon-project', {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
});

const customer = [
    {
        "salonId": "1",
        "name": "Harper",
        "email": "harper@yahoo.com",
        "phoneNumber": "916-111-1111"
    },
    {
        "salonId": "1",
        "name": "Gracie",
        "email": "gracie@yahoo.com",
        "phoneNumber": "916-111-2221"
    },
    {
        "salonId": "1",
        "name": "George",
        "email": "george@yahoo.com",
        "phoneNumber": "916-111-3333"
    },

]

db.Customer.deleteMany({})
    .then(() => db.Customer.collection.insertMany(customer))
    .then((data) => {
        // console.log(data.result.n + ' records inserted!');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        process.exit(1);
    });