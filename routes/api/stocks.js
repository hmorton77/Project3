const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

// Matches with "/api/stocks"
router.route("/").get(stocksController.findAll).post(stocksController.create);
router.route("/tickers").get(stocksController.findTickers);
// Matches with "/api/stocks/:id"
router.route("/getid/:id").get(stocksController.findById).put(stocksController.update).delete(stocksController.remove);

module.exports = router;
