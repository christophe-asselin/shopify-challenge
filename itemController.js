/**
 * name: itemController.js
 * author: Christophe Asselin
 * last modified: 2019-01-20
 */

// Import simulated database
items = require('./items');

// Handle get all items
exports.getAllItems = function (req, res) {
    let data = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].inventory_count > 0) {
            data.push(items[i]);
        }
    }
    res.json(data);
};

// Handle get single item
exports.getItem = function (req, res) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].title === req.params.title) {
            res.json(items[i]);
        }
    }
    res.json({ message: "Item does not exist" });
};

// Handle buy item
exports.buy = function (req, res) {
    for (let i = 0; i < items.length; i++) {
        if (items[i].title === req.params.title) {
            if (items[i].inventory_count > 0) {
                items[i].inventory_count--;
                res.json({ message: items[i].title.concat(" bought") });
            }
            else
                res.json({ message: items[i].title.concat(" is out of stock") });
        }
    }
    res.json({ message: "Item does not exist" });
};
