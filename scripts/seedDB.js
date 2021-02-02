const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Stonx");

const stockSeed = [
  {
    stockName: "AAPL",
    stockAmount: "1000",
  },
  {
    stockName: "BTC",
    stockAmount: "2.5",
  },
  {
    stockName: "GME",
    stockAmount: "35",
  },
];

db.Stonx.admin
  .remove({})
  .then(() => db.Stonx.collection.insertMany(stockSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
