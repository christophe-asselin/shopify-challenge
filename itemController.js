/**
 * name: itemController.js
 * author: Christophe Asselin
 * last modified: 2019-01-20
 */

Item = require('./itemModel');

// Handle get all items
exports.getAllItems = function (req, res) {
    if (req.query.available === "true") {
        Item.find({ inventory_count: { $gt: 0 }}, function(err, items) {
            if (err)
                res.send(err);
            res.json(items);
        });
    }
    else {
        Item.find({}, function(err, items) {
            if (err)
                res.send(err);
            res.send(items);
        });
    }
};

// Handle get single item
exports.getItem = function (req, res) {
    Item.find({ title: req.params.title }, function(err, item) {
        if (err) {
            res.send(err);
        }
        res.send(item);
    });
};

// Handle buy item
exports.buy = function (req, res) {
    Item.updateOne(
        { title: req.params.title, inventory_count: { $gt: 0 }},
        { $inc: { inventory_count: -1 } },
        function(err, found) {
            if (err)
                res.send(err);
            if (found.nModified)
                res.json({ message: req.params.title.concat(" bought")});
            else
                res.json({ message: "Item is out of stock or does not exist"})
    });
};
