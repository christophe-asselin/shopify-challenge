/**
 * name: routes.js
 * author: Christophe Asselin
 * last modified: 2019-01-18
 */

let router = require('express').Router();
let itemController = require('./itemController');

// Default get response
router.get("/", function (req, res) {
  res.json({ message: 'Welcome to my api!' });
});

router.route("/items")
  .get(itemController.getAllItems)
  .post(itemController.new);

router.route("/items/:title")
  .get(itemController.getItem)
  .put(itemController.buy);

module.exports = router;