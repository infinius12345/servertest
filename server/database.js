var mongoose = require('mongoose');
var Item = require('./models/items.js');

mongoose.connect(('mongodb://localhost'),function () {
    console.log("connected");

    mongoose.connection.db.dropDatabase();

    var items = [{
        name: "ice cream"
    }, {
        name: "candy"
    }];

    items.forEach(function (item) {
        new Item(item).save();
    })
});