/**
 * name: itemController.js
 * author: Christophe Asselin
 * last modified: 2019-01-20
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Setup schema
var itemSchema = new Schema({
    title: String,
    price: Number,
    inventory_count: Number
});

// Export Item model
var Item = mongoose.model('item', itemSchema);
module.exports = Item;
module.exports.get = function (callback, limit) {
    Item.find(callback).limit(limit);
}