/**
 * name: routes.js
 * author: Christophe Asselin
 * last modified: 2019-01-20
 */

let router = require('express').Router();
let itemController = require('./itemController');

// Default get response
router.route("/").get( function (req, res) {
    res.json({ message: 'Welcome to my api!' });
});

router.route("/items")
  .get(itemController.getAllItems)

router.route("/items/:title")
  .get(itemController.getItem)
  .put(itemController.buy);

module.exports = router;