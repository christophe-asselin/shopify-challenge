Item = require('./itemModel');

// Handle get all items
exports.getAllItems = function (req, res) {
    let data = [];
    Item.find({ inventory_count: { $gt: 0 }}, function (err, item) {
        data.push(item);
    });
    res.json(data);
};

// Handle get single item
exports.getItem = function (req, res) {
    Item.find({ title: req.params.title }, function (err, item) {
        if (err)
            res.send({ message: "Unknown Item" });
        res.json(item);
    });
};

// Handle buy item
exports.buy = function (req, res) {
    Item.find({ title: req.params.title }, function (err, item) {
        if (err)
            res.send(err);
        if (item.inventory_count > 0) {
            item.inventory_count--;
            res.json({ message: "Item bought" });
        }
        res.json({ message: "Item is out of stock" });
    });
};

// Handle new item
exports.new = function (req, res) {
    var item = new Item();
    item.title = req.params.title ? req.params.title : item.title;
    item.price = req.params.price;
    item.inventory_count = req.params.inventory_count;

    item.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New item added',
            data: item
        });
    });
};