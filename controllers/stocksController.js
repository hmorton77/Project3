const db = require("../models");

// Defining methods for the stocksController
module.exports = {
  findAll: function (req, res) {
    db.Stonx.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findTickers: function (req, res) {
    db.Stonx.find(req.query)
      //look to fix req.query to specify login email.
      .sort({ date: -1 })
      .then((dbModel) => {
        tickers = dbModel.map((stock) => {
          return stock.stockName;
        });
        res.json(tickers);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Stonx.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log(req.body);
    db.Stonx.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Stonx.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Stonx.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
