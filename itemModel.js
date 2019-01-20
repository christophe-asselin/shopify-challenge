var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
    title: String,
    price: Number,
    incentory_count: Number,
});

var Item = module.exports = mongoose.model('item', itemSchema);
module.exports.get = function (callback, limit) {
    Item.find(callback).limit(limit);
}