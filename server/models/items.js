var mongoose = require('mongoose');

var itemSchema = {
    name: String,
    purchased: Boolean
};

var Item = mongoose.model('Item',itemSchema,"items");

module.exports = Item;