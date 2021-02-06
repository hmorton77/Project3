const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

// Matches with "/api/stocks"
router.route("/").get(stocksController.findAll).post(booksController.create);

// Matches with "/api/stocks/:id"
router.route("/:id").get(stocksController.findById).put(booksController.update).delete(booksController.remove);

module.exports = router;
